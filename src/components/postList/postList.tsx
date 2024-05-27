import React, { useEffect, useState } from "react";
import PostCard from "../postCard/postCard.tsx";
import { Post } from "../../types/types.ts";

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (loading)
    return (
      <div className="text-lg font-bold text-center mt-10">Loading...</div>
    );
  if (error)
    return <div className="text-lg font-bold text-center">Error: {error}</div>;

  return (
    <>
      <div className="flex flex-wrap justify-center bg-customColor-light">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </>
  );
};

export default PostList;
