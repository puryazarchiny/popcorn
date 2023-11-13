import { ChevronLeftIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";

import { Box, Button, Error, Loading, Wrapper } from "@/components";
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
  const isBookmarked = bookmarks.some((bookmark) => bookmark.imdbID === imdbID);
  const movie = movies.find((movie) => movie.imdbID === fullMovie?.imdbID);

  const handleOnBackClick = () => {
    setFullMovie(null);
    navigate(-1);
  };

  const handleOnBookmarkClick = () => {
    if (!isBookmarked && movie) {
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
          <Box classes="flex flex-col gap-4 rounded-2xl bg-slate-950 p-4">
            <Box classes="flex items-center justify-between">
              <Button onClick={handleOnBackClick}>
                <ChevronLeftIcon className="h-6 w-6" />
              </Button>

              <p className="font-bold text-slate-300">{fullMovie?.Title}</p>

              <Button onClick={handleOnBookmarkClick}>
                {!isBookmarked ? (
                  <BookmarkIcon className="h-6 w-6" />
                ) : (
                  <BookmarkIconSolid className="h-6 w-6" />
                )}
              </Button>
            </Box>

            {fullMovie && <MovieDetails />}
            {error && <Error error={error} />}
            {isLoading && <Loading />}
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
