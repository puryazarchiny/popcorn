import { ReactNode } from "react";

interface CardsProps {
  children: ReactNode;
}

export function Cards({ children }: CardsProps) {
  return (
    <ul
      // className="CARDS | grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4"
      className="CARDS | grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </ul>
  );
}
