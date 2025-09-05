import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./app/router.js";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
