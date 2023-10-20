interface CardsProps {
  classes?: string;
  children: React.ReactNode;
}

function Cards({ classes, children }: CardsProps) {
  return (
    <ul
      className={
        "grid auto-rows-fr grid-cols-[repeat(auto-fit,minmax(min(256px,100%),1fr))] " +
        classes
      }
    >
      {children}
    </ul>
  );
}

export default Cards;
