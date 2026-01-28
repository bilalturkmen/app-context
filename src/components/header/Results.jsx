import { usePosts } from "../../hooks/usePosts";

export function Results() {
  const { posts } = usePosts();
  return (
    <p className="text-sm text-gray-500 hidden md:block min-w-fit ml-6 ">
      🚀 {posts.length} posts found
    </p>
  );
}
