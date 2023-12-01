import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsListPractice = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <div>
      <h2>Posts List</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsListPractice;
