import {
    Link,
    Box,
    Flex,
    Text,
    Stack,
    Container,
    HStack
} from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faStackOverflow, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const MenuIcon = () => (
    <svg
    width="12px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const CloseIcon = () => (
<svg width="12" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
    fill="white"
    d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
</svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, icon, text, isLast=false, to = "/",  isExternal=false, ...rest }) => {
    return (
        <Link href={to} isExternal={isExternal}>
            <HStack>
                <FontAwesomeIcon icon={icon}/>
                <Text fontSize="xs">{text}</Text>
            </HStack>
        </Link>
    );
};


const MenuLinks = ({ isOpen }) => {
    return (
        <Container
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}>
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="https://github.com/mcleantom" isExternal icon={faGithub} text="Github"/>
                <MenuItem to="https://stackoverflow.com/users/14720380/tom-mclean" isExternal icon={faStackOverflow} text="Stackoverflow"/>
                <MenuItem to="https://www.linkedin.com/in/tom-mclean-/" isExternal icon={faLinkedin} text="LinkedIn"/>
            </Stack>
        </Container>
    );
};


const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={4}
        p={4}
        // bg={["primary.500", "primary.500", "transparent", "transparent"]}
        // color={["white", "white", "primary.700", "primary.700"]}
        zIndex={100}
        {...props}
        >
        {children}
        </Flex>
    );
};


export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};