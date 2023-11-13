import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { FullMovie, Movie } from "@/features/movie";

export interface MovieContextType {
  movieName: string;
  setMovieName: Dispatch<SetStateAction<string>>;
  movies: Movie[];
  setMovies: Dispatch<SetStateAction<Movie[]>>;
  fullMovie: FullMovie | null;
  setFullMovie: Dispatch<SetStateAction<FullMovie | null>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  bookmarks: Movie[];
  setBookmarks: Dispatch<SetStateAction<Movie[]>>;
}

interface MovieProviderProps {
  children: ReactNode;
}

export const MovieContext = createContext<MovieContextType | null>(null);

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
