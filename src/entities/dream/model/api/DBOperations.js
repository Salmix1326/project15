//---- отримуємо посилання на базу даних
import db from "../../../../shared/config/firebase-config";
//---- імпортуємо методи для роботи з даними
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore/lite";
//---- отримуємо посилання на колекцію

class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name);
  }

  async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
    let q;
    const realLimit = perPage + 1;

    if (page === 1) {
      q = query(this.collectionRef, orderBy("title"), limit(realLimit));
    } else {
      const cursor = cursors[page - 2];
      if (!cursor) throw new Error("Cursor not found");
      q = query(
        this.collectionRef,
        orderBy("title"),
        startAfter(cursor),
        limit(realLimit)
      );
    }

    const snapshot = await getDocs(q);
    const docs = snapshot.docs;

    const hasMore = docs.length > perPage;

    const data = docs
      .slice(0, perPage)
      .map((doc) => ({ id: doc.id, ...doc.data() }));
    const lastVisible = docs[perPage - 1] || null;

    return { data, cursor: lastVisible, hasMore };
  }

  async getById(id) {
    if (!id) throw new Error("No ID provided");
    const snap = await getDoc(doc(this.collectionRef, id));
    return { id: snap.id, ...snap.data() };
  }

  async add(data) {
    await addDoc(this.collectionRef, data);
    return true;
  }

  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), data);
    return true;
  }

  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id));
    return true;
  }
}

export default DbOperations;
