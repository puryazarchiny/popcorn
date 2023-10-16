import Wrapper from "../containers/Wrapper";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <Wrapper classes="flex justify-between p-4">
        <a
          href="#"
          className="font-caveat text-3xl font-bold text-[#24292f] focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950"
        >
          🍿 Popcorn
        </a>

        <Nav />
      </Wrapper>
    </header>
  );
}

export default Header;
