import MainLayout from "../widgets/MainLayout/MainLayout"
import HomePage from "../pages/HomePage"
import DreamsPage from "../pages/DreamsPage";
import DreamEditPage from "../pages/DreamEditPage";
import { createBrowserRouter } from "react-router";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        meta: {
          label: "Home",
        },
      },
      {
        path: "dreams",
        Component: DreamsPage,
        meta: {
          label: "My Dreams List",
        },
      },
      {
        path: "/dreams/add",
        Component: DreamEditPage,
      },
      {
        path: "/dreams/edit/:id",
        Component: DreamEditPage,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
