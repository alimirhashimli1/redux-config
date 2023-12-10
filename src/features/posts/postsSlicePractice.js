import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "Redux TOolkit", content: "This is my redux toolkit app" },
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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const selectAllPosts = (state) => state.posts.posts;
export const selectUserId = (state) => state.posts.userId;

export const { postAdded, setUserId } = postsSlice.actions;
export default postsSlice.reducer;
