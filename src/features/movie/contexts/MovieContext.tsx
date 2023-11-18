import { Dispatch, SetStateAction, createContext } from "react";

import { FullMovie, Movie } from "@/features/movie";

interface MovieContextType {
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

export const MovieContext = createContext<MovieContextType | null>(null);
