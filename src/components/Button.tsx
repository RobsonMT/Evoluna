import { ForwardRefRenderFunction, ReactNode } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
  useColorModeValue,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  model: string;
  children?: ReactNode;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { model, children, ...rest },
  ref
) => {
  return (
    <ChakraButton
      background={model === "primary" ? "pink" : "transparent"}
      fontWeight="normal"
      textColor={model === "primary" ? "white" : "gray.300"}
      border="1px solid"
      borderColor={model === "primary" ? "white" : "gray.300"}
      borderRadius="15px"
      boxShadow={useColorModeValue(
        model === "primary"
          ? "0px 3px 7.5px #00000081"
          : "0px 2px 5px #00000081",
        model === "primary"
          ? "0px 1.5px 3px #ffffff81"
          : "0px 1px 2.5px #ffffff81"
      )}
      dropShadow={model === "primary" ? "0px 4px 10px #00000081" : "none"}
      height="30px"
      transition="filter .1s ease"
      _hover={{ filter: "brightness(.9)" }}
      _active={{ filter: "brightness(1.1)" }}
      {...rest}
      ref={ref}
    >
      {children}
      {model === "primary" && (
        <ChevronRightIcon
          h="20px"
          w="20px"
          color="white"
          border="2px solid white"
          borderRadius="50%"
          marginLeft="10px"
        />
      )}
    </ChakraButton>
  );
};

export const Button = forwardRef(ButtonBase);
