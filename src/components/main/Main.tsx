import { useEffect, useState } from "react";

import { Movie, FullMovie } from "../../types";

import Wrapper from "../containers/Wrapper";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";

interface MainProps {
  movieID: string;
  displayFavorites: boolean;
  setMovieID: React.Dispatch<React.SetStateAction<string>>;
  setDisplayFavorites: React.Dispatch<React.SetStateAction<boolean>>;
}

function Main({
  movieID,
  displayFavorites,
  setMovieID,
  setDisplayFavorites,
}: MainProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState<FullMovie[]>(() => {
    const storedValue = localStorage.getItem("favorites");
    if (!storedValue) return [];
    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <main>
      <section>
        <Wrapper classes="flex flex-col items-center gap-8 rounded-2xl bg-slate-950 px-4 py-16">
          <h1 className="text-center text-2xl font-bold text-slate-300">
            Search for the desired movie
          </h1>

          <SearchBar
            movies={movies}
            error={error}
            isLoading={isLoading}
            setMovies={setMovies}
            setError={setError}
            setIsLoading={setIsLoading}
            setMovieID={setMovieID}
            setDisplayFavorites={setDisplayFavorites}
          />
        </Wrapper>
      </section>

      <section>
        <Wrapper classes="mt-4 rounded-2xl bg-slate-950 p-4">
          {!movieID && !displayFavorites ? (
            <>
              <p className="py-[6px] text-center font-bold text-slate-300">
                Found {movies.length || 0} results
              </p>
              {isLoading ? (
                <p className="mt-4 text-center font-bold text-slate-300">
                  Loading...
                </p>
              ) : !error ? (
                <MovieList movies={movies} setMovieID={setMovieID} />
              ) : (
                <p className="mt-4 text-center font-bold text-slate-300">
                  {error}
                </p>
              )}
            </>
          ) : movieID ? (
            <MovieDetails
              movieID={movieID}
              favorites={favorites}
              setMovieID={setMovieID}
              setFavorites={setFavorites}
            />
          ) : (
            <Favorites
              favorites={favorites}
              setFavorites={setFavorites}
              setDisplayFavorites={setDisplayFavorites}
              setMovieID={setMovieID}
            />
          )}
        </Wrapper>
      </section>
    </main>
  );
}

export default Main;
