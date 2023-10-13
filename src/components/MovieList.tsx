import { Movie } from "./Main";

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(256px,100%),1fr))] gap-4">
      {movies.map((movie) => {
        return (
          <li
            key={movie.imdbID}
            className="grid grid-rows-[auto_1fr_auto] gap-4 rounded-lg bg-slate-900 p-4"
          >
            <img
              src={movie.Poster}
              alt="movie"
              className="aspect-square w-full object-contain"
            />

            <h2 className="text-lg font-bold text-slate-300">{movie.Title}</h2>

            <div className="flex justify-between">
              <p className="text-slate-500">🗓 {movie.Year}</p>
              <p className="text-slate-500">📁 {movie.Type}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
