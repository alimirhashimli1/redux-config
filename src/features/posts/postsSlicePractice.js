import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Redux TOolkit", content: "This is my redux toolkit app" },
  {
    id: 2,
    title: "Web development",
    content: "I M RETRINY FO LEANR WEB DEVELOPMENT",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
