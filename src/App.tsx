import { Footer, Header } from "@/components";
import { AppRoutes } from "@/routes";

export function App() {
  const root = document.getElementById("root")!;

  root.setAttribute(
    "class",
    "CONTAINER | grid min-h-screen grid-rows-[auto_1fr_auto] bg-slate-300 font-wotfard",
  );

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
