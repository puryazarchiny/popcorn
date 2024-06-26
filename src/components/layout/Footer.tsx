import { Wrapper } from "@/components";

export function Footer() {
  return (
    <footer>
      <Wrapper>
        <p className="p-4 text-center text-[#24292f]">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/puryazarchiny"
            target="_blank"
            className="font-caveat text-xl"
          >
            Purya Zarchiny
          </a>
        </p>
      </Wrapper>
    </footer>
  );
}
