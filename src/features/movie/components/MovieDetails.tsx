import {
  CalendarIcon,
  ClockIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

import { useMovie } from "@/features/movie";

export function MovieDetails() {
  const { fullMovie } = useMovie();
  const hours = Math.round(Number(fullMovie?.Runtime.slice(0, -4)) / 60);
  const minutes = Number(fullMovie?.Runtime.slice(0, -4)) % 60;
  const tags = fullMovie?.Genre.split(", ").map((tag) => (
    <li key={tag} className="rounded bg-slate-800 px-3 py-1 text-slate-300">
      {tag}
    </li>
  ));

  return (
    <div className="CONTAINER | col-span-2 grid grid-cols-1 justify-items-center gap-4 rounded-lg bg-slate-900 p-4 lg:grid-cols-[auto,1fr]">
      <img src={fullMovie?.Poster} alt="Movie poster" />
      <ul className="flex flex-col gap-4 p-4">
        <li>
          <p className="font-bold text-slate-300">{fullMovie?.Title}</p>
        </li>
        <li className="flex gap-2">
          <StarIcon className="h-6 w-6 text-yellow-300" />
          <p className="text-slate-300">
            {fullMovie?.imdbRating}
            <span className="text-slate-800">/10</span>
          </p>
        </li>
        <li className="flex gap-2">
          <FolderIcon className="h-6 w-6 text-slate-800" />
          <p className="text-slate-300">{fullMovie?.Type}</p>
        </li>
        <li className="flex gap-2">
          <CalendarIcon className="h-6 w-6 text-slate-800" />
          <p className="text-slate-300">{fullMovie?.Released.slice(-4)}</p>
        </li>
        <li className="flex gap-2">
          <ClockIcon className="h-6 w-6 text-slate-800" />
          <p className="text-slate-300">
            {hours}h {minutes}m
          </p>
        </li>
        <li className="flex gap-2">
          <h2 className="font-bold text-slate-800">Director</h2>
          <p className="text-slate-300">{fullMovie?.Director}</p>
        </li>
        <li className="flex gap-2">
          <h2 className="font-bold text-slate-800">Stars</h2>
          <p className="text-slate-300">{fullMovie?.Actors}</p>
        </li>
        <li>
          <ul className="flex gap-2">{tags}</ul>
        </li>
        <li>
          <p className="text-slate-300">{fullMovie?.Plot}</p>
        </li>
      </ul>
    </div>
  );
}
