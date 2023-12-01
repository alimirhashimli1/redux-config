import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlicePractice";
import { nanoid } from "@reduxjs/toolkit";

const AddPostFormPractice = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
    }
  };

  return (
    <section>
      <h2>Add a Post</h2>
      <form>
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
          value={content}
          id="postContent"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSavePostClicked}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPostFormPractice;
