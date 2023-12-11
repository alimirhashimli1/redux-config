// PostsListPractice.js

import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlicePractice";
import { selectAllUsers } from "../users/usersSlicePractice";

const PostsListPractice = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const renderedPosts = posts.map((post) => {
    const author = users.find((user) => user.id === post.userId);

    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <span>by {author ? author.name : "Unknown author"}</span>
      </article>
    );
  });

  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsListPractice;
