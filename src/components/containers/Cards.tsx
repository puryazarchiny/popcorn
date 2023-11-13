interface CardsProps {
  children: React.ReactNode;
  classes?: string;
}

export function Cards({ children, classes }: CardsProps) {
  return (
    <ul
      // className={
      //   "grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4 " +
      //   classes
      // }
      className={
        "grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 " +
        classes
      }
    >
      {children}
    </ul>
  );
}
