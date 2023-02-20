import {
  Box,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import Background from "../components/sections/Background";
import HeaderHero from "../components/sections/HeaderHero";
import Hero from "../components/sections/Hero";

function Block({ children, primary = false, ...rest }) {
  const bgColor = primary ? "gray.100" : "white";
  return (
    <Box bgColor={bgColor} {...rest}>
      <Container>
        <Flex>{children}</Flex>
      </Container>
    </Box>
  );
}

function BlockLeft({ children, ...rest }) {
  return (
    <Box w="33%" {...rest}>
      {children}
    </Box>
  );
}

function BlockRight({ children, ...rest }) {
  return (
    <Box w="33%" {...rest}>
      {children}
    </Box>
  );
}

function BlockCenter({ children, ...rest }) {
  return (
    <Container maxW="container.md" {...rest}>
      {children}
    </Container>
  );
}

function TheChallengeBlock() {
  const title = "The Challenge";
  const text = `How do you determine the pathway forward for new heavy marine technology when the capex implications of a poorly performing ship are so high? \n\n\n
  How do you further reduce that risk and ensure innovation can be deployed into new markets?\n\n
  How do you decipher which is the best solution in the industry and gain the confidence to invest in one technology versus another?\n
  Any genuine result must also take into account all of the forces from all of the differing aspects of a ship.  All too often the best result is “cherry picked” (and marketed) rather than considering the whole ship performance on the whole voyage.`;

  return (
    <Block>
      <BlockLeft p={4} align="right">
        <Text as="span" align="right" sx={{ whiteSpace: "pre-line" }}>
          {title}
        </Text>
      </BlockLeft>
      <BlockCenter p={4}>
        <Text as="span" color="GrayText">
          {text}
        </Text>
      </BlockCenter>
      <BlockRight>{}</BlockRight>
    </Block>
  );
}

export default function NewHome() {
  return (
    <Box>
      <HeaderHero>
        <Hero
          title="ShipSEAT"
          subtitle="How do you determine the pathway forward for new heavy marine technology when the capex implications of a poorly performing ship are so high?  How do you further reduce that risk and ensure innovation can be deployed into new markets?"
          image=""
        />
      </HeaderHero>
      <TheChallengeBlock />
    </Box>
  );
}
