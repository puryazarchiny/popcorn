import { useEffect, useRef, useState } from "react";

import { Movie } from "../../types";

import Container from "../containers/Container";

interface SearchBarProps {
  movies: Movie[];
  error: string;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({
  movies,
  error,
  setMovies,
  setError,
  setIsLoading,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        error && setError("");

        setIsLoading(true);

        const response = await fetch(
          `http://www.omdbapi.com/?apikey=886e3304&s=${query || "fast"}`,
        );

        const data = await response.json();

        if (data.Response === "False") {
          movies && setMovies([]);
          throw new Error(`${data.Error}`);
        }

        setMovies(data.Search);
      } catch (error) {
        if (error instanceof Error) {
          movies && setMovies([]);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container classes="flex items-center gap-2 rounded-full bg-slate-900 px-4 focus-within:bg-slate-800">
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
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input
        type="text"
        name="movie"
        placeholder="Search"
        value={query}
        className="h-12 bg-transparent text-slate-300 outline-none placeholder:text-slate-500"
        ref={inputRef}
        onChange={(event) => setQuery(event.target.value)}
      />

      {query ? (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            inputRef.current.focus();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-slate-500 hover:text-slate-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <div className="w-6"></div>
      )}
    </Container>
  );
}

export default SearchBar;
