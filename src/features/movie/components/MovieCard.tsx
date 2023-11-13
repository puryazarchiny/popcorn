import { CalendarIcon, FolderIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { Box } from "@/components";
import { Movie } from "@/features/movie";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <li key={movie.imdbID}>
      <Link
        to={movie.imdbID}
        className="grid h-full grid-cols-2 grid-rows-[auto_1fr_auto] gap-y-4 rounded-lg bg-slate-900 p-4"
      >
        <img
          src={movie.Poster}
          alt="Movie poster"
          className="col-span-full aspect-square w-full object-contain"
        />

        <h2 className="col-span-full text-lg font-bold text-slate-300">
          {movie.Title}
        </h2>

        <Box classes="flex gap-2">
          <CalendarIcon className="h-6 w-6 text-slate-500" />
          <p className="text-slate-500">{movie.Year}</p>
        </Box>

        <Box classes="flex gap-2 justify-self-end">
          <FolderIcon className="h-6 w-6 text-slate-500" />
          <p className="text-slate-500">{movie.Type}</p>
        </Box>
      </Link>
    </li>
  );
}
