import { useEffect, useState } from "react";

import { FullMovie } from "../../types";

import Container from "../containers/Container";

interface MovieDetailsProps {
  movieID: string;
  favorites: FullMovie[];
  setMovieID: React.Dispatch<React.SetStateAction<string>>;
  setFavorites: React.Dispatch<React.SetStateAction<FullMovie[]>>;
}

function MovieDetails({
  movieID,
  favorites,
  setMovieID,
  setFavorites,
}: MovieDetailsProps) {
  const [movieDetails, setMovieDetails] = useState<FullMovie | null>(null);
  const [isBookmarked, setIsBookmark] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=886e3304&i=${movieID}`,
      );

      const data = await response.json();

      setMovieDetails(data);
    };

    fetchMovie();
  }, [movieID]);

  useEffect(() => {
    if (!movieDetails?.Title) return;

    document.title = `${movieDetails?.Title} - Popcorn`;

    return () => {
      document.title = "Popcorn";
    };
  }, [movieDetails?.Title]);

  return (
    <Container classes="flex flex-col gap-4">
      <Container classes="flex items-center justify-between">
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
          onClick={() => setMovieID("")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <p className="font-bold text-slate-300">{movieDetails?.Title}</p>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
          onClick={() => {
            setIsBookmark(!isBookmarked);
            !favorites.find((favorite) => favorite.imdbID === movieID)
              ? setFavorites((favorites) => {
                  if (!movieDetails) return favorites;
                  return [...favorites, movieDetails];
                })
              : setFavorites(
                  favorites.filter((favorite) => favorite.imdbID !== movieID),
                );
          }}
        >
          {!favorites.find((favorite) => favorite.imdbID === movieID) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </Container>

      <Container classes="flex grow flex-wrap justify-center gap-4 rounded-lg bg-slate-900 p-4 lg:flex-nowrap lg:justify-normal">
        <Container classes="lg:shrink-0">
          <img src={movieDetails?.Poster} alt="Movie poster" />
        </Container>

        <Container classes="flex grow flex-col gap-4">
          <h2 className="text-center text-lg font-bold text-slate-300">
            {movieDetails?.Title}
          </h2>

          <ul className="grow space-y-4 border border-slate-800 p-4">
            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-slate-300">
                {movieDetails?.imdbRating}
                <span className="text-slate-500">/10</span>
              </p>
            </li>

            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>

              <p className="text-slate-300">{movieDetails?.Type}</p>
            </li>

            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>

              <p className="text-slate-300">
                {movieDetails?.Released.slice(-4)}
              </p>
            </li>

            <li className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-slate-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-slate-300">
                {Math.round(Number(movieDetails?.Runtime.slice(0, -4)) / 60)}h{" "}
                {Number(movieDetails?.Runtime.slice(0, -4)) % 60}m
              </p>
            </li>

            <li className="flex gap-2">
              <h3 className="font-bold text-slate-500">Director</h3>
              <p className="text-slate-300">{movieDetails?.Director}</p>
            </li>

            <li className="flex gap-2">
              <h3 className="font-bold text-slate-500">Stars</h3>
              <p className="text-slate-300">{movieDetails?.Actors}</p>
            </li>

            <li>
              <ul className="flex gap-2">
                {movieDetails?.Genre.split(", ").map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-800 px-3 py-1 text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <p className="text-slate-300">{movieDetails?.Plot}</p>
            </li>
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default MovieDetails;
