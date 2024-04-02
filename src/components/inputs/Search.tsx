import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useRef } from "react";

interface SearchProps {
  name: string;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
}

export function Search({ name, inputText, setInputText }: SearchProps) {
  const inputRef = useRef<HTMLInputElement>(null!);
  const placeholder = <div className="PLACEHOLDER | h-6 w-6"></div>;

  const handleOnClick = () => {
    setInputText("");
    inputRef.current.focus();
  };

  const clearButton = (
    <button type="button" onClick={handleOnClick}>
      <XMarkIcon className="h-6 w-6 text-slate-700 hover:text-slate-300" />
    </button>
  );

  return (
    <div
      className="SEARCH | grid cursor-text grid-cols-[auto,1fr,auto] gap-x-3 rounded-lg bg-slate-900 p-3 focus-within:bg-slate-800"
      onClick={() => inputRef.current.focus()}
    >
      <MagnifyingGlassIcon className="h-6 w-6 text-slate-700" />
      <input
        type="text"
        name={name}
        placeholder="Search"
        value={inputText}
        ref={inputRef}
        className="bg-transparent text-slate-300 outline-none placeholder:text-slate-700"
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      {inputText ? clearButton : placeholder}
    </div>
  );
}
