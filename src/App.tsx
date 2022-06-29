import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

export const App = () => <ChakraProvider theme={theme}></ChakraProvider>;
