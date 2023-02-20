import { Fade } from "@chakra-ui/react"
import useOnScreen from "../../hooks/useOneScreen"
import { useRef } from 'react';

export default function FadeInView({children, offset="0px", ...rest}) {
    const ref = useRef(null);
    const isOnScreen = useOnScreen(ref, offset);

    return (
        <Fade in={isOnScreen} ref={ref} {...rest}>{children}</Fade>
    )
}