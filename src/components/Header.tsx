import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      justifyContent="end"
      alignItems="center"
      p={["0px 10px", "0px 30px"]}
      h="50px"
      bg={useColorModeValue("whitesmoke", "black.300")}
    >
      <ColorModeSwitcher />
    </Flex>
  );
};
