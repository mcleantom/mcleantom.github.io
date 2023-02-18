import { BackgroundBlob } from "../components/BackgroundBlob";
import { Box, Heading, Text, Stack, Container, useTheme } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import Hero from "../components/sections/Hero";

function Feature({
  title, desc, ...rest
}) {

  const box_ref = useRef<HTMLDivElement>(null);

  const moveGlow = event => {
    if (box_ref.current && box_ref.current.style) {
      const rect = box_ref.current.getBoundingClientRect(),
        x = event.clientX - rect.left,
        y = event.clientY - rect.top;

      box_ref.current.style.setProperty("--mouse-x", `${x}px`);
      box_ref.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveGlow);
    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <Box 
      ref={box_ref}
      p={5}
      shadow='md'
      backgroundColor="blackAlpha.50"
      borderRadius="10px"
      border="1px"
      borderColor="white"
      position="relative"
      _before={{
        sx:{
          bg: "white"
        },
        background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.5), transparent 40%)`,
        // bgGradient: "radial(whiteAlpha.500, whiteAlpha.50)",
        borderRadius: "inherit",
        content: `""`,
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: 2
      }}
    >
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}

export function Home() {
  const theme = useTheme();

  return (
    <Box>
      <BackgroundBlob/>
      <Container maxW='4xl' centerContent>
        <Stack spacing={8} direction="column">
          <Hero
            title="Tom McLean"
            subtitle="Simulation and performance engineer"
            image="https://i.ytimg.com/vi/juCjvZHlLes/maxresdefault.jpg"
          ></Hero>
          <Feature
            title='Python'
            desc='Im pretty good at Python'
          />
          <Feature
            title='Save Money'
            desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
          />
        </Stack>
      </Container>

    </Box>
  )
}
