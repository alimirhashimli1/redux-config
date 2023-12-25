import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdded } from "./posts/postsSlice";
import { selectAllUsers } from "./users/usersSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postsAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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

        <label htmlFor="postAuthor">Author</label>
        <select
          name=""
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
        </select>

        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
