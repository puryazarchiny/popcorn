import { BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/bookmarks"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded bg-slate-200 text-[#24292f] hover:bg-slate-100"
          >
            <BookmarkIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
