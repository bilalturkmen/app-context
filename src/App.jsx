import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import PostArchive from "./components/PostArchive";
import { ModalProvider } from "./context/ModalContext";
import { ModalRenderer } from "./components/ModalRenderer";

function App() {
  return (
    <ModalProvider>
      <div className="w-full h-dvh grid grid-rows-[auto_1fr_1fr_auto]">
        <Header />
        <HeroSection />
        <PostArchive />
        <Footer />
        <ModalRenderer />
      </div>
    </ModalProvider>
  );
}

export default App;
