import { ReactNode, useState } from "react";

import { FullMovie, Movie, MovieContext } from "@/features/movie";

interface MovieProviderProps {
  children: ReactNode;
}

export function MovieProvider({ children }: MovieProviderProps) {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [fullMovie, setFullMovie] = useState<FullMovie | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState<Movie[]>([]);
  const value = {
    movieName,
    setMovieName,
    movies,
    setMovies,
    fullMovie,
    setFullMovie,
    error,
    setError,
    isLoading,
    setIsLoading,
    bookmarks,
    setBookmarks,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
