import { BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import githubMark from "@/assets/icons/github-mark.svg";
import { Wrapper } from "@/components";

export function Header() {
  return (
    <header>
      <Wrapper>
        <div className="CONTAINER | grid grid-cols-[1fr,auto,auto] gap-x-2 p-4">
          <Link to="/" className="font-caveat text-3xl text-[#24292f]">
            🍿 Popcorn
          </Link>
          <Link
            to="/bookmarks"
            className="grid h-9 w-9 cursor-pointer content-center justify-center rounded bg-slate-200 text-[#24292f] hover:bg-slate-100"
          >
            <BookmarkIcon className="h-6 w-6" />
          </Link>
          <a
            href="https://github.com/puryazarchiny/popcorn"
            target="_blank"
            className="grid h-9 w-9 cursor-pointer content-center justify-center rounded bg-slate-200 hover:bg-slate-100"
          >
            <img src={githubMark} alt="Invertocat logo" className="w-6" />
          </a>
        </div>
      </Wrapper>
    </header>
  );
}
