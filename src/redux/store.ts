import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";
import ApproveCvSlice from "./slices/ApproveCvSlice";

// ...

export const store = configureStore({
  reducer: {
    LoginSlice:loginSlice.reducer,
    Approve: ApproveCvSlice.reducer
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
