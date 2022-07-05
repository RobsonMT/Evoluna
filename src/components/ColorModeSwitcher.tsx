import { FaMoon, FaSun } from "react-icons/fa";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";

type IColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: IColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      bg="transparent"
      color={useColorModeValue("gray.800", "whitesmoke")}
      transition="all .3s linear "
      aria-label={`Switch to ${text} mode`}
      _active={{ filter: "brightness(1.1)" }}
      _hover={{
        background: useColorModeValue("gray.300", "gray.500"),
        color: useColorModeValue("gray.800", "yellow"),
      }}
      {...props}
    />
  );
};
