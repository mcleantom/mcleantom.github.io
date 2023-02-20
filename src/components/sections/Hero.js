import PropTypes from "prop-types";
import { Flex, Stack, Heading } from "@chakra-ui/layout";
import { Box, Image, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
export default function Hero({
    title,
    subtitle,
    image,
    ...rest
}) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex
            align="center"
            justify={{ base: "left" }}
            direction={{  md: "row" }}
            wrap="no-wrap"
            minH="50vh"
            px={8}
            mb={16}
            color="blue"
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: "50%", md: "30%" }}
                align={["flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="normal"
                    textAlign={["left"]}
                    fontSize={["2.5rem"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    opacity="0.8"
                    fontWeight="light"
                    lineHeight={1.5}
                    textAlign={["left"]}
                >
                    {subtitle}
                </Heading>
            </Stack>
        </Flex>
    )
}

Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string
};

Hero.defaultProps = {
    title: "Tom Mclean",
    subtitle: "Simulation and performance engineer",
    image: "https://i.ytimg.com/vi/juCjvZHlLes/maxresdefault.jpg"
}