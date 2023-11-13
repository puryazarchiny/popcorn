import { Wrapper } from "@/components";

export function Footer() {
  return (
    <footer>
      <Wrapper classes="flex items-center justify-center p-4">
        <p className="text-[#24292f]">
          Made with ♥ by{" "}
          <a
            href="https://github.com/puryazarchiny"
            target="_blank"
            className="font-caveat text-xl font-bold"
          >
            Purya Zarchiny
          </a>
        </p>
      </Wrapper>
    </footer>
  );
}
