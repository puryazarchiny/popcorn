import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

import { Button, Wrapper } from "@/components";
import { BookmarkList, useMovie, useNavigationButtons } from "@/features/movie";

export function Bookmarks() {
  const { bookmarks, setFullMovie } = useMovie();
  const navigate = useNavigate();

  const handleOnClick = () => {
    setFullMovie(null);
    navigate(-1);
  };

  useNavigationButtons();

  return (
    <main>
      <section>
        <Wrapper>
          <div className="CONTAINER | grid grid-cols-1 gap-y-4 rounded-2xl bg-slate-950 p-4">
            <Button classes="col-[1/2] row-[1/2]" onClick={handleOnClick}>
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
            <p className="col-[1/2] row-[1/2] self-center justify-self-center font-bold text-slate-300">
              Bookmarks
            </p>
            {bookmarks.length !== 0 && <BookmarkList />}
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
