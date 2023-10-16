interface BodyProps {
  classes: string;
  children: React.ReactNode;
}

function Body({ classes, children }: BodyProps) {
  return (
    <div className={"grid grid-rows-[auto_1fr_auto] " + classes}>
      {children}
    </div>
  );
}

export default Body;
