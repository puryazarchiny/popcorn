import { useEffect } from "react";

import { Body, Footer, Header } from "@/components";
import { AppRoutes } from "@/routes";

export function App() {
  useEffect(() => {
    document.body.style.cssText = `
    margin-left: calc(100vw - 100%);
    background-color: #cbd5e1;
  `;
  }, []);

  return (
    <Body classes="bg-slate-300 font-wotfard">
      <Header />
      <AppRoutes />
      <Footer />
    </Body>
  );
}
