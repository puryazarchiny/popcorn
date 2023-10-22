import Wrapper from "../containers/Wrapper";
import Nav from "./Nav";

interface HeaderProps {
  setDisplayFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  setMovieID: React.Dispatch<React.SetStateAction<string>>;
}

function Header({ setDisplayFavorites, setMovieID }: HeaderProps) {
  return (
    <header>
      <Wrapper classes="flex justify-between p-4">
        <a
          href="#"
          className="font-caveat text-3xl font-bold text-[#24292f] focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950"
        >
          🍿 Popcorn
        </a>

        <Nav
          setDisplayFavorites={setDisplayFavorites}
          setMovieID={setMovieID}
        />
      </Wrapper>
    </header>
  );
}

export default Header;
