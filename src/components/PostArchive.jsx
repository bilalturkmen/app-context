import { useState } from "react";
import { usePosts } from "../hooks/usePosts";

function PostArchive() {
  const { onAddPost, createRandomPost } = usePosts();

  // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
  const [posts] = useState(() =>
    // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
    Array.from({ length: 10 }, () => createRandomPost()),
  );

  const [showArchive, setShowArchive] = useState(false);
  const [addedPostIndex, setAddedPostIndex] = useState(null);

  const toggleArchiveVisibility = () => {
    setShowArchive((prevState) => !prevState);
  };

  const handleAddPost = (post, index) => {
    onAddPost(post);
    setAddedPostIndex(index);
    setTimeout(() => setAddedPostIndex(null), 2000); // Hide popup after 2 seconds
  };

  return (
    <div className="bg-stone-50/40 border-t border-gray-100">
      <div className="container p-6">
        <h2 className="sm:text-2xl text-3xl font-medium title-font">
          Post archive
        </h2>

        <button
          onClick={toggleArchiveVisibility}
          className="my-5 border rounded-full px-3 py-2 border-indigo-300 hover:bg-gray-100"
        >
          <span className="flex items-center cursor-pointer text-indigo-400 ">
            {showArchive ? "Hide archive posts" : "Show archive posts"}
            <svg
              className={`w-4 h-4 ml-2 ${showArchive ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500"></div>
        </div>
        {showArchive && (
          <table className="table-auto text-left text-sm border border-stone-100 border-collapse w-full">
            <thead className="uppercase tracking-wider border-b border-t border-stone-100 bg-stone-50/40">
              <tr>
                <th className="p-3 font-medium">Image</th>
                <th className="p-3 font-medium">Title</th>
                <th className="p-3 font-medium">Post</th>
                <th className="p-3 font-medium">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index} className="border-b border-stone-100">
                  <td className="p-3 w-12">
                    <img src={post.arcimg} alt="" className="rounded-full" />
                  </td>
                  <th className="p-3 capitalize">{post.title}</th>
                  <td className="p-3 w-2/4">{post.body}</td>
                  <td className="p-3 text-right min-w-fit ">
                    <button
                      onClick={() => handleAddPost(post, index)}
                      className="font-medium cursor-pointer flex ml-auto text-white bg-indigo-400 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-500 rounded"
                    >
                      Add as new post
                    </button>
                    {addedPostIndex === index && (
                      <div className="text-right text-gray-700 text-xs/3 ">
                        blog post added
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p className="text-gray-600 py-3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom prism food truck
          ugh squid celiac humblebrag.
        </p>
      </div>
    </div>
  );
}

export default PostArchive;
