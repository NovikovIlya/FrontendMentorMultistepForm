import { configureStore } from "@reduxjs/toolkit";
import sliceUrl from "./sliceUrl";

export const store = configureStore({
  reducer: {
    sliceUrl,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;