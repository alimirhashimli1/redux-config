import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  { id: "2", title: "Slices", content: "The more I slice, the more I learn" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postsAdded } = postsSlice.actions;
export default postsSlice.reducer;
