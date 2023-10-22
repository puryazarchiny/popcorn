import { Movie } from "../../types";

import Cards from "../containers/Cards";
import Container from "../containers/Container";

interface MovieListProps {
  movies: Movie[];
  setMovieID: React.Dispatch<React.SetStateAction<string>>;
}

function MovieList({ movies, setMovieID }: MovieListProps) {
  return (
    <Cards classes={!movies.length ? "gap-4" : "mt-4 gap-4"}>
      {movies.map((movie) => {
        return (
          <li
            key={movie.imdbID}
            className="grid grid-cols-2 grid-rows-[auto_1fr_auto] gap-y-4 rounded-lg bg-slate-900 p-4"
          >
            <img
              src={movie.Poster}
              alt="Movie poster"
              className="col-span-full aspect-square w-full cursor-pointer object-contain"
              onClick={() => setMovieID(movie.imdbID)}
            />

            <h2
              className="col-span-full cursor-pointer text-lg font-bold text-slate-300"
              onClick={() => setMovieID(movie.imdbID)}
            >
              {movie.Title}
            </h2>

            <Container classes="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>

              <p className="text-slate-500">{movie.Year}</p>
            </Container>

            <Container classes="flex gap-2 justify-self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>

              <p className="text-slate-500">{movie.Type}</p>
            </Container>
          </li>
        );
      })}
    </Cards>
  );
}

export default MovieList;
