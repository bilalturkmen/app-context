import { usePosts } from "../../hooks/usePosts";

export function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
      className="w-full  bg-opacity-50 rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  );
}
