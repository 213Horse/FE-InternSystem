import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginSlice";
import internSlice from "./slices/InternListSlice";
import projectSlice from "./slices/ProjectSlice";
// ...

export const store = configureStore({
  reducer: {
    LoginSlice:loginSlice.reducer,
    interns: internSlice,
    projects : projectSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
