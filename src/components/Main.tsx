function Main() {
  return (
    <main>
      <section>
        <div className="mx-auto flex h-[248px] max-w-[min(1280px,calc(100%-32px))] flex-col items-center justify-center gap-8 rounded-2xl bg-slate-950 text-slate-50">
          <h1 className="text-xl font-bold sm:text-3xl">
            Search for the desired movie
          </h1>
          <div className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-2 text-base focus-within:bg-slate-800 sm:text-lg">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="h-[52px] w-full bg-transparent outline-none placeholder:text-slate-500"
            />
            <div className="flex h-9 w-9 shrink-0 cursor-default items-center justify-center rounded-full bg-slate-800">
              🎥
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
