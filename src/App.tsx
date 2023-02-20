import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Home } from "./pages/home";
import NewHome from "./pages/newHome";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NewHome />
  </ChakraProvider>
);
