import * as React from "react";
import { ChakraProvider, Box, AspectRatio } from "@chakra-ui/react";
import { theme } from "./theme";

import { BackgroundBlob } from "./components/BackgroundBlob";
import { Home } from "./pages/home";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
);
