import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
}

export function Button({ children, classes, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={
        "flex h-9 w-9 items-center justify-center rounded bg-slate-800 text-slate-300 hover:bg-slate-700 " +
        classes
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
