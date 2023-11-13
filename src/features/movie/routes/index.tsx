import { Route, Routes } from "react-router-dom";

import { Bookmarks } from "./Bookmarks";
import { Movie } from "./Movie";

export function MovieRoutes() {
  return (
    <Routes>
      <Route path=":imdbID" element={<Movie />} />
      <Route path="bookmarks" element={<Bookmarks />} />
      <Route path="bookmarks/:imdbID" element={<Movie />} />
    </Routes>
  );
}
