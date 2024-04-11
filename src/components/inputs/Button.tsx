import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  classes?: string;
  onClick: () => void;
}

export function Button({ children, classes, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={
        "grid h-9 w-9 content-center justify-center rounded bg-slate-900 text-slate-300 hover:bg-slate-800 " +
        (classes || "")
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
