import { createContext, useState, useRef, useEffect } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "post" or "addPost"
  const [selectedPost, setSelectedPost] = useState(null);
  const modalRef = useRef(null);

  const openPostModal = (post) => {
    setSelectedPost(post);
    setModalType("post");
    setModalOpen(true);
  };

  const openAddPostModal = () => {
    setModalType("addPost");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
    setModalType(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleMouseDown = (event) => {
      if (isModalOpen) {
        handleClickOutside(event);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalType,
        selectedPost,
        modalRef,
        openPostModal,
        openAddPostModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider, ModalContext };
