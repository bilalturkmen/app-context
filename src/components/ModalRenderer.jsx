import { useModal } from "../hooks/useModal";
import { FormAddPost } from "./FormAddPost";

export function ModalRenderer() {
  const { isModalOpen, modalType, selectedPost, modalRef, closeModal } =
    useModal();

  if (!isModalOpen) return null;

  if (modalType === "post") {
    return (
      <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900/50">
        <div
          ref={modalRef}
          className="relative p-4 w-full max-w-4xl max-h-full"
        >
          <div className="relative bg-stone-50 border border-stone-200 rounded-lg shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 md:pb-5">
              <h3 className="text-lg font-semibold capitalize">
                {selectedPost?.title}
              </h3>
              <button
                type="button"
                className="text-sm w-5 h-6 cursor-pointer"
                onClick={closeModal}
              >
                &#x2716;
                <span className="sr-only">Close window</span>
              </button>
            </div>

            <div className="space-y-4 md:space-y-6 py-4 md:py-6">
              <img
                src={selectedPost?.image}
                alt={selectedPost?.title}
                className="w-full h-60 rounded-lg object-cover object-center"
              />
              <p className="leading-relaxed text-base">{selectedPost?.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (modalType === "addPost") {
    return (
      <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900/50">
        <div
          ref={modalRef}
          className="relative p-4 w-full max-w-2xl max-h-full"
        >
          <div className="relative bg-stone-50 border border-stone-200 rounded-lg shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 md:pb-5">
              <h3 className="text-lg font-semibold">Add New Post</h3>
              <button
                type="button"
                className="text-sm w-5 h-6 cursor-pointer"
                onClick={closeModal}
              >
                &#x2716;
                <span className="sr-only">Close window</span>
              </button>
            </div>

            <div className="py-4 md:py-6">
              <FormAddPost />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
