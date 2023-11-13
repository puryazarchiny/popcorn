import { Route, Routes } from "react-router-dom";

import { MovieRoutes } from "@/features/movie";
import { Home } from "./Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<MovieRoutes />} />
    </Routes>
  );
}
