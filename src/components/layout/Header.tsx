import { Box, Github, Logo, Nav, Wrapper } from "@/components";

export function Header() {
  return (
    <header>
      <Wrapper>
        <Box classes="flex justify-between p-4">
          <Logo />
          <Box classes="flex gap-2">
            <Nav />
            <Github />
          </Box>
        </Box>
      </Wrapper>
    </header>
  );
}
