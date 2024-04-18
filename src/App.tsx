import { BrowserRouter } from "react-router-dom";

import { Footer, Header } from "@/components";
import { MovieProvider } from "@/features/movie";
import { AppRoutes } from "@/routes";

import "@/index.css";

export function App() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "CONTAINER | grid min-h-screen grid-rows-[auto_1fr_auto] bg-slate-300 font-wotfard",
  );

  return (
    <BrowserRouter>
      <MovieProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </MovieProvider>
    </BrowserRouter>
  );
}
