import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetcher } from "./util";

const usePostQuery = (url) => {
  const { data, isError, isLoading } = useQuery(["posts", url], fetcher);

  if (isError) {
    throw new Error("data not available");
  }
  return { data, isLoading };
};

export default usePostQuery;
