import { configureStore } from "@reduxjs/toolkit";
import { dreamsApi } from "@/entities/dream/model/dreamsApi";

export const store = configureStore({
  reducer: {
    [dreamsApi.reducerPath]: dreamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dreamsApi.middleware),
});
