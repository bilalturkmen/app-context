import { usePosts } from "../hooks/usePosts";
import { useModal } from "../hooks/useModal";

function HeroSection() {
  const { posts } = usePosts();
  const { openPostModal } = useModal();

  return (
    <main>
      <div className="container p-3">
        <div className="flex flex-wrap">
          {posts.map((post, index) => (
            <div
              key={index}
              onClick={() => openPostModal(post)}
              className="xl:w-1/3 md:w-1/2 w-full p-3 "
            >
              <div className="border border-gray-200 p-4 rounded-lg min-h-62 hover:bg-gray-50/40 cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-20 rounded-lg object-cover object-center"
                />

                <h2 className="text-lg text-gray-900 font-medium title-font capitalize my-3">
                  {post.title}
                </h2>
                <p className="leading-relaxed text-base">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
