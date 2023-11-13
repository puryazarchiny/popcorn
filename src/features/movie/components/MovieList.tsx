import { Cards } from "@/components";
import { MovieCard, useMovie } from "@/features/movie";

export function MovieList() {
  const { movies } = useMovie();

  return (
    <Cards>
      {movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </Cards>
  );
}
