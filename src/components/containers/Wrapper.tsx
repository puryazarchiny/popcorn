interface WrapperProps {
  children: React.ReactNode;
  classes?: string;
}

export function Wrapper({ children, classes }: WrapperProps) {
  return (
    <div className={"mx-auto max-w-[min(1280px,calc(100%-32px))] " + classes}>
      {children}
    </div>
  );
}
