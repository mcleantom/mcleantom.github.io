import * as React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

import { Home } from "./pages/home";
export const App = () => (
  
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
