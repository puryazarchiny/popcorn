interface BodyProps {
  children: React.ReactNode;
  classes?: string;
}

export function Body({ children, classes }: BodyProps) {
  return (
    <div className={"grid min-h-screen grid-rows-[auto_1fr_auto] " + classes}>
      {children}
    </div>
  );
}
