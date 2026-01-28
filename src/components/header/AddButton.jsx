import PencilSVG from "../../assets/PencilSVG";
import { useModal } from "../../hooks/useModal";

export function AddButton() {
  const { openAddPostModal } = useModal();

  return (
    <button
      type="button"
      onClick={openAddPostModal}
      className="min-w-fit px-3 py-2 bg-gray-100 flex items-center gap-2 rounded-full hover:bg-gray-200 cursor-pointer "
    >
      <PencilSVG /> Add Post
    </button>
  );
}
