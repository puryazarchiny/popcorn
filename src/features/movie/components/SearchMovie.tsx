import { Search } from "@/components";
import { getMovies, useMovie } from "@/features/movie";

export function SearchMovie() {
  const { movieName, setMovieName } = useMovie();

  getMovies("s", movieName);

  return (
    <Search name="movie" inputText={movieName} setInputText={setMovieName} />
  );
}
