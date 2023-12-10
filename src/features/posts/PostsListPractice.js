import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlicePractice";
import { selectAllUsers } from "../users/usersSlice";
import { selectUserId } from "./postsSlicePractice";

const PostsListPractice = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);
  const userId = useSelector(selectUserId);
  const author = users.find((user) => user.id === userId);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <span>by {author ? author.name : "Unknown author"}</span>
    </article>
  ));

  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}/
    </div>
  );
};

export default PostsListPractice;
