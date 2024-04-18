import { useEffect } from "react";

import { API_URL } from "@/config";
import { useMovie } from "@/features/movie";

export function useFetch(type: "s" | "i", movie: string) {
  const { setMovies, setFullMovie, error, setError, setIsLoading } = useMovie();

  useEffect(() => {
    const getMovies = async () => {
      try {
        error && setError("");
        setIsLoading(true);

        const response = await fetch(`${API_URL}&${type}=${movie}`);
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
          type === "s" && setMovies([]);
          type === "i" && setFullMovie(null);
          setError(error.message);
          setIsLoading(false);
        }
      }
    };

    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);
}
