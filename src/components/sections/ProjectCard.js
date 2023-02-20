import { useRef, useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Fade,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';
import useOnScreen from '../../hooks/useOneScreen';

function Feature({
  title, desc, skills, ...rest
}) {

  const box_ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isOnScreen = useOnScreen(box_ref, "-200px");

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
    <Card
      ref={box_ref}
      p={4}
      shadow='md'
      backgroundColor="blackAlpha.50"
      borderRadius="10px"
      border="1px"
      borderColor="white"
      position="relative"
      _before={{
        // sx:{
        //   bg: "white"
        // },
        // background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.2), transparent 40%)`,
        // // bgGradient: "radial(whiteAlpha.500, whiteAlpha.50)",
        // borderRadius: "inherit",
        // content: `""`,
        // height: "100%",
        // width: "100%",
        // position: "absolute",
        // top: "0px",
        // left: "0px",
        // zIndex: 2,
        // opacity: isHovering ? 1 : 0,
        // transition: "opacity 500ms",
        // pointerEvents:"none"
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader>
        <Heading fontSize='2xs' textColor="green.200">{skills}</Heading>
      </CardHeader>
      <CardBody>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => console.log("button clicked")}>
          Find out more...
        </Button>
      </CardFooter>

    </Card>
  )
}

export default Feature;