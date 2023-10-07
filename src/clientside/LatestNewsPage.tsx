"use client";

import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import PageHeader from "@/components/PageHeader";

interface Post {
  id: number;
  title: string;
}

const LatestNewsPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/typicode/demo/posts"
        );
        const myPosts = await response.json();
        setPosts(myPosts);
        setLoaded(true); // Set loaded to true after posts are fetched
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoaded(true); // Set loaded to true even if there's an error to hide the spinner
      }
    };

    getPosts();
  }, []);

  return (
    <>
      {!loaded && (
        <div className="z-50 absolute right-0 bottom-0 bg-[#222222] h-[100vh] w-[100vw] top-0 left-0 flex flex-col justify-center items-center">
          <span className="sr-only">Loading...</span>
          <Spinner
            aria-label="Warning spinner example"
            color="warning"
            size="xl"
            className="w-[300px] h-[300px]"
          />
          <h1 className="py-8 text-center text-white text-3xl">Loading ...</h1>
        </div>
      )}
      <div>
        <PageHeader pageTitle="Latest News" />
        <div className="min-h-[20vh]">
          <h1 className="text-red-400">This is Latest News Page!!!</h1>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestNewsPage;
