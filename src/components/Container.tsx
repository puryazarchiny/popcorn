interface ContainerProps {
  classes: string;
  children: React.ReactNode;
}

function Container({ classes, children }: ContainerProps) {
  return (
    <div className={"mx-auto max-w-[min(1280px,calc(100%-32px))] " + classes}>
      {children}
    </div>
  );
}

export default Container;
