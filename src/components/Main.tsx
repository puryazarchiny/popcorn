import { useState } from "react";

import Container from "./Container";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

function Main() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <section>
        <Container classes="flex flex-col items-center gap-8 rounded-2xl bg-slate-950 px-4 py-16">
          <h1 className="text-2xl font-bold text-slate-300">
            Search for the desired movie
          </h1>
          <SearchBar
            movies={movies}
            error={error}
            setMovies={setMovies}
            setError={setError}
            setIsLoading={setIsLoading}
          />
        </Container>
      </section>

      <section>
        <Container classes="mt-4 space-y-4 rounded-2xl bg-slate-950 p-4">
          <p className="text-center font-bold text-slate-300">
            Found {movies.length || 0} results
          </p>
          <hr />
          {isLoading ? (
            <p className="text-center font-bold text-slate-300">Loading...</p>
          ) : !error ? (
            <MovieList movies={movies} />
          ) : (
            <p className="text-center font-bold text-slate-300">{error}</p>
          )}
        </Container>
      </section>
    </main>
  );
}

export default Main;
