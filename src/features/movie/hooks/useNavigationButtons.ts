import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useMovie } from "./useMovie";

export function useNavigationButtons() {
  const { setFullMovie } = useMovie();
  const location = useLocation();

  useEffect(() => {
    setFullMovie(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
}
