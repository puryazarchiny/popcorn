import { useContext } from "react";

import { MovieContext } from "@/features/movie";

export function useMovie() {
  const movieContext = useContext(MovieContext);

  if (!movieContext)
    throw new Error("useMovie has to be used within <MovieContext.Provider>");

  return movieContext;
}
