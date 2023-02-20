import { Box, Heading, Container, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Background from "./Background";
export default function HeaderHero({ children }) {
  return (
    <Box
      width="100%"
      backgroundColor="#E8C7B6"
      color="blue"
      overflow="hidden"
      position="relative"
      display="flex"
      // zIndex={-10}
    >
      <Container>
        <NavBar />
        {children}
      </Container>
    </Box>
  );
}
