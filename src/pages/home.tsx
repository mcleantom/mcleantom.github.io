import { BackgroundBlob } from "../components/BackgroundBlob";
import { Box } from "@chakra-ui/layout";
import Hero from "../components/sections/Hero";

export function Home() {
  return (
    <Box>
      <BackgroundBlob/>
      <Hero
        title="Tom McLean"
        subtitle="Simulation and performance engineer"
      ></Hero>
    </Box>
  )
}
