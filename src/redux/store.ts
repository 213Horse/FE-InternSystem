import { configureStore } from "@reduxjs/toolkit";

import internSlice from "./slices/InternListSlice";
import projectSlice from "./slices/ProjectSlice";
import loginSlice from "./slices/LoginSlice";
import ApproveCvSlice from "./slices/ApproveCvSlice";
import GroupSlice from "./slices/GroupZaloSlice";
// ...

export const store = configureStore({
  reducer: {
    LoginSlice:loginSlice.reducer,
    interns: internSlice,
    projects : projectSlice,
    approve:ApproveCvSlice.reducer,
    group:GroupSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
