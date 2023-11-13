interface ErrorProps {
  error: string;
}

export function Error({ error }: ErrorProps) {
  return <p className="text-center font-bold text-slate-300">{error}</p>;
}
