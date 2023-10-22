import { FullMovie } from "../../types";

import Cards from "../containers/Cards";
import Container from "../containers/Container";

interface FavoritesProps {
  favorites: FullMovie[];
  setFavorites: React.Dispatch<React.SetStateAction<FullMovie[]>>;
  setDisplayFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  setMovieID: React.Dispatch<React.SetStateAction<string>>;
}

function Favorites({
  favorites,
  setFavorites,
  setDisplayFavorites,
  setMovieID,
}: FavoritesProps) {
  return (
    <Container>
      <Container classes="grid grid-cols-1">
        <button
          type="button"
          className="col-[1/2] row-[1/2] flex h-9 w-9 items-center justify-center rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
          onClick={() => setDisplayFavorites(false)}
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

        <p className="col-[1/2] row-[1/2] self-center justify-self-center font-bold text-slate-300">
          Favorites
        </p>
      </Container>

      <Cards classes={!favorites.length ? "gap-4" : "mt-4 gap-4"}>
        {favorites.map((favorite) => {
          return (
            <li
              key={favorite.imdbID}
              className="grid grid-cols-2 grid-rows-[auto_auto_1fr_auto] gap-y-4 rounded-lg bg-slate-900 p-4"
            >
              <button
                type="button"
                className="col-span-full flex h-9 w-9 items-center justify-center justify-self-end rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                onClick={() =>
                  setFavorites(
                    favorites.filter(
                      (movie) => movie.imdbID !== favorite.imdbID,
                    ),
                  )
                }
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <img
                src={favorite.Poster}
                alt="Movie poster"
                className="col-span-full aspect-square w-full cursor-pointer object-contain"
                onClick={() => setMovieID(favorite.imdbID)}
              />

              <h2
                className="col-span-full cursor-pointer text-lg font-bold text-slate-300"
                onClick={() => setMovieID(favorite.imdbID)}
              >
                {favorite.Title}
              </h2>

              <Container classes="flex gap-2">
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

                <p className="text-slate-500">{favorite.Year}</p>
              </Container>

              <Container classes="flex gap-2 justify-self-end">
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

                <p className="text-slate-500">{favorite.Type}</p>
              </Container>
            </li>
          );
        })}
      </Cards>
    </Container>
  );
}

export default Favorites;
