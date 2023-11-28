import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

import React from "react";
import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postContent">Post Content:</label>
        <input
          type="text"
          id="postContent"
          name="posContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={dispatch(postAdded())}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
