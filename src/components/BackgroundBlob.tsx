import { Box } from "@chakra-ui/react";
import { useMousePosition } from "../hooks/useMousePosition";
import { useEffect, useState, useRef } from "react";
// function Blur() {
//   return (
//     <Box
//       position="absolute"
//       top="0px"
//       left="0px"
//       width="100%"
//       height="100%"
//       backdropFilter="auto"
//       // backdropBlur="20px"
//       borderColor="red"
//       // borderWidth={2}
//       zIndex={2}
//     ></Box>
//   )
// };

export function BackgroundBlob() {
  const position = useMousePosition();

  return (
    <Box
      position="fixed"
      width="100vw"
      height="100vh"
      top="0px"
      left="0px"
    >
      <Box
        bg={"whiteAlpha.100"}
        pos="fixed"
        width="500px"
        height="500px"
        top={`${position.y}`}
        left={`${position.x}`}
        transform="translate(-50%, -50%)"
        borderRadius="50%"
        bgGradient="linear(to-r, green.200, pink.500)"
        aspect-ratio="1"
        zIndex={-1}
        filter="auto"
        blur="50px"
      ></Box>
      {/* <Blur/> */}
    </Box>
  );
}
