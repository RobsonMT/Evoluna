import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex as="header" w="100%" justifyContent="end" alignItems="center">
      <ColorModeSwitcher />
    </Flex>
  );
};
