import { BackgroundBlob } from "../BackgroundBlob"
import Linesplan from "../Linesplan"
import { Box } from "@chakra-ui/react"
export default function Background() {
    return (
        <Box
            position="absolute"
            height="100%"
            width="100vw"
            overflow="hidden"
            top="0px"
            left="0px"
            pointerEvents="none"
        >
            <BackgroundBlob/>
            <Linesplan/>
        </Box>
    )
}