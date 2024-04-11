import { ChevronLeftIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Wrapper } from "@/components";
import {
  getMovies,
  MovieDetails,
  useMovie,
  useNavigationButtons,
} from "@/features/movie";

export function Movie() {
  const {
    movies,
    fullMovie,
    setFullMovie,
    error,
    isLoading,
    bookmarks,
    setBookmarks,
  } = useMovie();
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const errorMessage = (
    <p className="col-span-3 text-center font-bold text-slate-300">{error}</p>
  );
  const loading = (
    <p className="col-span-3 text-center font-bold text-slate-300">
      Loading...
    </p>
  );
  const movie = movies.find((movie) => movie.imdbID === fullMovie?.imdbID);
  const isBookmarked = bookmarks.some((bookmark) => bookmark.imdbID === imdbID);
  const bookmarked = <BookmarkIconSolid className="h-6 w-6" />;
  const notBookmarked = <BookmarkIcon className="h-6 w-6" />;

  const handleOnBackClick = () => {
    setFullMovie(null);
    navigate(-1);
  };

  const handleOnBookmarkClick = () => {
    if (movie && !isBookmarked) {
      setBookmarks((bookmarks) => [...bookmarks, movie]);
    } else {
      setBookmarks(bookmarks.filter((bookmark) => bookmark.imdbID !== imdbID));
    }
  };

  getMovies("i", imdbID);
  useNavigationButtons();

  return (
    <main>
      <section>
        <Wrapper>
          <div className="CONTAINER | grid grid-cols-2 gap-y-4 rounded-2xl bg-slate-950 p-4">
            <Button onClick={handleOnBackClick}>
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <Button classes="justify-self-end" onClick={handleOnBookmarkClick}>
              {!isBookmarked ? notBookmarked : bookmarked}
            </Button>
            {fullMovie && <MovieDetails />}
            {error && errorMessage}
            {isLoading && loading}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
