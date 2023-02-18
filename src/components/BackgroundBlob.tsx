import { AspectRatio, Box } from "@chakra-ui/react";
import { useMousePosition } from "../hooks/useMousePosition";

export function BackgroundBlob() {
  const position = useMousePosition();

  return (
    <AspectRatio
      width="500px"
      ratio={1}
      pos="absolute"
      top={`${position.y}`}
      left={`${position.x}`}
      animation="3s linear slidein, 3s ease-out 5s slideout"
    >
      <Box
        bg={"whiteAlpha.100"}
        pos="absolute"
        width="100%"
        height="100%"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        borderRadius="50%"
        bgGradient="linear(to-r, green.200, pink.500)"
      ></Box>
    </AspectRatio>
  );
}
