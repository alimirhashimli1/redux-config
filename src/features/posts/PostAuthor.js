import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = () => {
  const users = useSelector(selectAllUsers);
  return <div>PostAuthor</div>;
};

export default PostAuthor;
