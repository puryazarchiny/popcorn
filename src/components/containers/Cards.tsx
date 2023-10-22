interface CardsProps {
  classes?: string;
  children: React.ReactNode;
}

function Cards({ classes, children }: CardsProps) {
  return (
    <ul
      className={
        // "grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] " + classes
        "grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 " + classes
      }
    >
      {children}
    </ul>
  );
}

export default Cards;
