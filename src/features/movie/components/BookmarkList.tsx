import { Cards } from "@/components";
import { MovieCard, useMovie } from "@/features/movie";

export function BookmarkList() {
  const { bookmarks } = useMovie();

  return (
    <Cards>
      {bookmarks.map((bookmark) => {
        return <MovieCard key={bookmark.imdbID} movie={bookmark} />;
      })}
    </Cards>
  );
}
