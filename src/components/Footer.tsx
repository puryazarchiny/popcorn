import Container from "./Container";

function Footer() {
  return (
    <footer>
      <Container classes="flex items-center justify-center py-4">
        <p className="text-[#24292f]">
          Made with ♥ by{" "}
          <a
            href="https://github.com/puryazarchiny"
            target="_blank"
            className="font-caveat text-xl font-bold focus-visible:rounded focus-visible:outline-double focus-visible:outline-2 focus-visible:outline-slate-950"
          >
            Purya Zarchiny
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
