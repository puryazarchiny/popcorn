import { Box, Error, Loading, Wrapper } from "@/components";
import { MovieList, SearchMovie, useMovie } from "@/features/movie";

export function Home() {
  const { movies, error, isLoading } = useMovie();

  return (
    <main className="flex flex-col gap-4">
      <section>
        <Wrapper>
          <Box classes="flex flex-col items-center gap-8 rounded-2xl bg-slate-950 px-4 py-16">
            <h1 className="text-center text-2xl font-bold text-slate-300">
              Search for the desired movie
            </h1>

            <SearchMovie />
          </Box>
        </Wrapper>
      </section>

      <section>
        <Wrapper>
          <Box classes="flex flex-col gap-4 rounded-2xl bg-slate-950 p-4">
            <p className="flex h-9 items-center justify-center font-bold text-slate-300">
              Found {movies.length || 0} results
            </p>

            {movies.length !== 0 && <MovieList />}
            {error && <Error error={error} />}
            {isLoading && <Loading />}
          </Box>
        </Wrapper>
      </section>
    </main>
  );
}
