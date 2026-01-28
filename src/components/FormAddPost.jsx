import { useState } from "react";
import { useModal } from "../hooks/useModal";
import { usePosts } from "../hooks/usePosts";

export function FormAddPost() {
  const { onAddPost, createRandomPost } = usePosts();
  const { closeModal } = useModal();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    const rand = createRandomPost();
    onAddPost({ title, body, image: rand.image });
    setTitle("");
    setBody("");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-32"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500"
      >
        Add post
      </button>
    </form>
  );
}
