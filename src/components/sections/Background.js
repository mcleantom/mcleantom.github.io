import { BackgroundBlob } from "../BackgroundBlob"
import Linesplan from "../Linesplan"
import { Box } from "@chakra-ui/react"
export default function Background() {
    return (
        <Box
            position="absolute"
            width="100vw"
            height="100vh"
            overflow="none"
            top="0px"
            left="0px"
            pointerEvents="none"
        >
            <BackgroundBlob/>
            <Linesplan/>
        </Box>
    )
}