import { Box, keyframes } from "@chakra-ui/react";
import { useMousePosition } from "../hooks/useMousePosition";
import { useRef, useState, useEffect } from "react";

const follow_mouse = keyframes`
  left { rotate: 0deg; }
`

const spin = keyframes`
  from {transform: rotate(0deg) translate(-50% -50%)}
  50% {scale: 1 2}
  to {transform: rotate(360deg) translate(-50% -50%)}
`;

export function BackgroundBlob() {

  const box_ref = useRef<HTMLDivElement>(null);

  const moveBlob = event => {
    if (box_ref.current && box_ref.current.style) {
      box_ref.current.animate({
        left:`${event.clientX}px`,
        top:`${event.clientY}px`
      }, { duration: 50000, fill: "forwards"});
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveBlob);
    return () => {
      window.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  const spinAnimation = `${spin} infinite 20s linear`;

  return (
    <Box
      position="absolute"
      width="100vw"
      height="100vh"
      top="0px"
      left="0px"
    >
      <Box
        ref={box_ref}
        bg={"whiteAlpha.100"}
        pos="fixed"
        width="500px"
        height="500px"
        transform="translate(-50%, -50%)"
        borderRadius="50%"
        bgGradient="linear(to-r, green.200, pink.500)"
        aspect-ratio="1"
        zIndex={-1}
        filter="auto"
        blur="100px"
        animation={spinAnimation}
      ></Box>
    </Box>
  );
}
