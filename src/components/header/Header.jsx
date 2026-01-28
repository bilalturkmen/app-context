import { ModeButton } from "./ModeButton";
import { Logo } from "./Logo";
import { Results } from "./Results";
import { SearchPosts } from "./SearchPosts";
import { AddButton } from "./AddButton";

export default function Header() {
  return (
    <header className="bg-stone-50 border-b border-stone-300">
      <div className="container flex items-center min-h-29 gap-3 p-6">
        <Logo />
        <Results />
        <SearchPosts />
        <AddButton />
        <ModeButton />
      </div>
    </header>
  );
}
