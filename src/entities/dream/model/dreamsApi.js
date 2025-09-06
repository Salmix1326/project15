import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import DbOperations from "./api/DBOperations";

const db = new DbOperations("dreams");

export const dreamsApi = createApi({
  reducerPath: "dreamsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Dream"],
  endpoints: (builder) => ({
    // Весь список продуктів
    getAllDreams: builder.query({
      async queryFn() {
        try {
          const data = await db.getAll();
          return { data };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Dream"],
    }),
    // З пагінацією
    getDreams: builder.query({
      async queryFn({ page = 1, perPage = 6, cursors = [] }) {
        try {
          const { data, cursor, hasMore } = await db.getAllPaginated({
            page,
            perPage,
            cursors,
          });
          return { data: { data, cursor, hasMore } };
        } catch (error) {
          return { error: { status: 500, message: error.message } };
        }
      },
      providesTags: ["Dream"],
    }),
    getDreamById: builder.query({
      async queryFn(id) {
        try {
          if (!id) throw new Error("No ID provided");
          const data = await db.getById(id);
          return { data };
        } catch (error) {
          return {
            error: {
              status: 500,
              message: error.message || "Unknown error",
            },
          };
        }
      },
    }),
    addDream: builder.mutation({
      async queryFn(dream) {
        try {
          await db.add(dream);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),
    updateDream: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),
    deleteDream: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id);
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Dream"],
    }),
  }),
});

export const {
  useGetAllDreamsQuery,
  useGetDreamsQuery,
  useGetDreamByIdQuery,
  useUpdateDreamMutation,
  useDeleteDreamMutation,
  useAddDreamMutation,
} = dreamsApi;

