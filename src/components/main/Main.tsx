import { useState } from "react";

import { Movie } from "../../types";

import Wrapper from "../containers/Wrapper";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

function Main() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movieID, setMovieID] = useState("");

  return (
    <main>
      <section>
        <Wrapper classes="flex flex-col items-center gap-8 rounded-2xl bg-slate-950 px-4 py-16">
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
        </Wrapper>
      </section>

      <section>
        <Wrapper classes="mt-4 space-y-4 rounded-2xl bg-slate-950 p-4">
          {!movieID ? (
            <>
              <p className="py-[6px] text-center font-bold text-slate-300">
                Found {movies.length || 0} results
              </p>
              {isLoading ? (
                <p className="text-center font-bold text-slate-300">
                  Loading...
                </p>
              ) : !error ? (
                <MovieList movies={movies} setMovieID={setMovieID} />
              ) : (
                <p className="text-center font-bold text-slate-300">{error}</p>
              )}
            </>
          ) : (
            <MovieDetails movieID={movieID} setMovieID={setMovieID} />
          )}
        </Wrapper>
      </section>
    </main>
  );
}

export default Main;
