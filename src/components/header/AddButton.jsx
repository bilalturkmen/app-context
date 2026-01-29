import PencilSVG from "../../assets/PencilSVG";
import { useModal } from "../../hooks/useModal";

export function AddButton() {
  const { openAddPostModal } = useModal();

  return (
    <button
      type="button"
      onClick={openAddPostModal}
      className="min-w-fit px-3 md:py-2 py-3 border border-gray-300 flex items-center gap-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500 "
    >
      <PencilSVG />
      <span className="hidden md:inline">Add Post</span>
    </button>
  );
}
