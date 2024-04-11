import { Wrapper } from "@/components";
import { MovieList, SearchMovie, useMovie } from "@/features/movie";

export function Home() {
  const { movies, error, isLoading } = useMovie();
  const errorMessage = (
    <p className="text-center font-bold text-slate-300">{error}</p>
  );
  const loading = (
    <p className="text-center font-bold text-slate-300">Loading...</p>
  );

  return (
    <main className="grid grid-cols-1 content-start gap-y-4">
      <section>
        <Wrapper>
          <div className="CONTAINER | grid grid-cols-1 justify-items-center gap-y-8 rounded-2xl bg-slate-950 px-4 py-16">
            <h1 className="text-2xl font-bold text-slate-300">
              Search for your desired movie
            </h1>
            <SearchMovie />
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div className="CONTAINER | grid grid-cols-1 gap-y-4 rounded-2xl bg-slate-950 p-4">
            <p className="grid h-9 grid-cols-1 items-center justify-items-center font-bold text-slate-300">
              Found {movies.length || 0} results
            </p>
            {movies.length !== 0 && <MovieList />}
            {error && errorMessage}
            {isLoading && loading}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
