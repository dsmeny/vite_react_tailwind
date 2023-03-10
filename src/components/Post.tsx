import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h4>{post.userId}</h4>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
