import { BackgroundBlob } from "../components/BackgroundBlob";
import {
  Fade,
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useTheme,
  transition,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import Background from "../components/sections/Background";
import useOnScreen from "../hooks/useOneScreen";
import NavBar from "../components/sections/NavBar";
import FadeInView from "../components/sections/FadeInView";

function Feature({ title, desc, skills, ...rest }) {
  const box_ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isOnScreen = useOnScreen(box_ref, "-200px");

  const moveGlow = (event) => {
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
    <Card
      ref={box_ref}
      p={4}
      shadow="md"
      backgroundColor="blackAlpha.50"
      borderRadius="10px"
      border="1px"
      borderColor="whiteAplha.500"
      position="relative"
      _before={{
        sx: {
          bg: "white",
        },
        background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.2), transparent 40%)`,
        // bgGradient: "radial(whiteAlpha.500, whiteAlpha.50)",
        borderRadius: "inherit",
        content: `""`,
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: 2,
        opacity: isHovering ? 1 : 0,
        transition: "opacity 500ms",
        pointerEvents: "none",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader>
        <Heading fontSize="2xs" textColor="green.200">
          {skills}
        </Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => console.log("button clicked")}>
          Find out more...
        </Button>
      </CardFooter>
    </Card>
  );
}

function Projects() {
  return (
    <Stack spacing={4}>
      <Heading>Projects</Heading>
      <SimpleGrid columns={[1, 2, 2]} spacing={8}>
        <Feature
          title="ShipSEAT"
          desc="Ship sytem efficiency analysis toolset"
          skills="C++ Python"
        />
        <Feature
          title="PBLM"
          desc="Physics based learning methods"
          skills="Machine Learning"
        />
      </SimpleGrid>
    </Stack>
  );
}

export function Home() {
  const theme = useTheme();

  return (
    <Box overflow="none" position="relative">
      <NavBar />
      <Background />
      <Container maxW="container.lg" centerContent mb={4}>
        <Stack width="100%" spacing={8} direction="column">
          <Hero
            title="Tom McLean"
            subtitle="Simulation and performance engineer"
            image=""
          />
          <Projects />
        </Stack>
      </Container>
    </Box>
  );
}
