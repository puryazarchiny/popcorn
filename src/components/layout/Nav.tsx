import { BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import githubMark from "@/assets/icons/github-mark.svg";

export function Nav() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            to="/bookmarks"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-slate-200 text-[#24292f] hover:bg-slate-100"
          >
            <BookmarkIcon className="h-6 w-6" />
          </Link>
        </li>

        <li>
          <a
            href="https://github.com/puryazarchiny/popcorn"
            target="_blank"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-slate-200 hover:bg-slate-100"
          >
            <img src={githubMark} alt="Invertocat logo" className="w-6" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
