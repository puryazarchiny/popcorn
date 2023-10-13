import Container from "./Container";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <Container classes="flex justify-between p-4">
        <a
          href="#"
          className="font-caveat text-3xl font-bold text-[#24292f] focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950"
        >
          🍿 Popcorn
        </a>

        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
