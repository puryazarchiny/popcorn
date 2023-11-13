import { Logo, Nav, Wrapper } from "@/components";

export function Header() {
  return (
    <header>
      <Wrapper classes="flex justify-between p-4">
        <Logo />
        <Nav />
      </Wrapper>
    </header>
  );
}
