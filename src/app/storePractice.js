import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlicePractice";
import usersReducer from "../features/users/usersSlicePractice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
