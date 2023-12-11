// postsSlicePractice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "Redux Toolkit", content: "This is my redux toolkit app" },
    {
      id: 2,
      title: "Web development",
      content: "I M RETRINY FO LEANR WEB DEVELOPMENT",
    },
  ],
  userId: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      const { id, title, content, userId } = action.payload;
      state.posts.push({ id, title, content, userId });
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

// Export action creators explicitly
export const { postAdded, setUserId } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const selectUserId = (state) => state.posts.userId;

export default postsSlice.reducer;
