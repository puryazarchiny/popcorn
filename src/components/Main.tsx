import { useState } from "react";

import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Main() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <main>
      <section>
        <div className="mx-auto flex max-w-[min(1280px,calc(100%-32px))] flex-col items-center justify-center gap-8 rounded-2xl bg-slate-950 px-4 py-16">
          <h1 className="text-center text-2xl font-bold text-slate-300">
            Search for the desired movie
          </h1>
          <SearchBar setMovies={setMovies} />
        </div>
      </section>

      <section>
        <div className="mx-auto mt-4 max-w-[min(1280px,calc(100%-32px))] space-y-4 rounded-2xl bg-slate-950 p-4">
          <p className="text-lg font-bold text-slate-300">
            Found {movies.length || 0} results
          </p>
          <hr />
          <MovieList movies={movies} />
        </div>
      </section>
    </main>
  );
}

export default Main;
