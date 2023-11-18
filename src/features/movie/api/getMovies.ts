import { useEffect } from "react";

import { API_URL } from "@/config";
import { useMovie } from "@/features/movie";

export function useFetch(type: string, movie: string | undefined) {
  const {
    movies,
    setMovies,
    fullMovie,
    setFullMovie,
    error,
    setError,
    isLoading,
    setIsLoading,
  } = useMovie();

  useEffect(() => {
    if (!movie) {
      movies.length !== 0 && setMovies([]);
      fullMovie && setFullMovie(null);
      error && setError("");
      isLoading && setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const getMovies = async () => {
      try {
        error && setError("");
        setIsLoading(true);

        const response = await fetch(`${API_URL}&${type}=${movie}`, {
          signal: controller.signal,
        });

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(`${data.Error}`);
        }

        type === "s" && setMovies(data.Search);
        type === "i" && setFullMovie(data);
        setIsLoading(false);
      } catch (error) {
        if (
          error instanceof Error &&
          error.message !== "The user aborted a request."
        ) {
          movies && type === "s" && setMovies([]);
          fullMovie && type === "i" && setFullMovie(null);
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    getMovies();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);
}
