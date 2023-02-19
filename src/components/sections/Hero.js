import PropTypes from "prop-types";
import { Flex, Stack, Heading } from "@chakra-ui/layout";
import { Box, Image } from "@chakra-ui/react";
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
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="secondry.800"
                    textAlign={["center", "center", "left", "left"]}
                >
                    {title}
                </Heading>
                <Heading
                    as="h2"
                    size="md"
                    color="primary.800"
                    opacity="0.8"
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={["center", "center", "left", "left"]}
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