import React from "react";
import usePostQuery from "../global/usePostQuery";
import Post from "./Post";

const Posts = () => {
  const { data, isLoading } = usePostQuery(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!data) {
    return <div>data not available</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pr-3 pl-3 bg-slate-500">
      <ul className="grid grid-cols-1 py-3 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {data.map((post) => (
          <li key={post.id} className="card">
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
