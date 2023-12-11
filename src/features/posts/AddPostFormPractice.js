import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlicePractice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../users/usersSlicePractice";

const AddPostFormPractice = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
          userId,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <form>
        <label htmlFor="postTitle">
          Title
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">
          Content
          <input
            type="text"
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="button" onClick={onSavePostClick}>
            Save Post
          </button>
        </label>
      </form>
    </section>
  );
};

export default AddPostFormPractice;
