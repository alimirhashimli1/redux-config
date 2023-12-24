import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postsAdded } from "./posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postsAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
  };

  return (
    <section>
      <h2>Add New Post</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="button" onClick={onSavePostClicked}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
