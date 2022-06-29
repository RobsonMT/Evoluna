import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputLeftElement, Input as ChakraInput } from "@chakra-ui/react";
import { InputGroup, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { useState, useEffect, useCallback } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: IconType;
  error?: FieldError | null;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red",
  default: "gray.300",
  focus: "purple.800",
  filled: "green.500",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, icon: Icon, name, error = null, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");

  useEffect(() => {
    error && setVariation("error");
  }, [error]);

  const handleInputFocus = useCallback(() => {
    !error && setVariation("focus");
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel color="grey.dark" fontWeight="bold" mb="0">
          {label}
        </FormLabel>
      )}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement
            children={<Icon />}
            color={inputVariation[variation]}
            mt="1"
          />
        )}
        <ChakraInput
          name={name}
          bg="gray.50"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          size="lg"
          h="50px"
          variant="outline"
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.300" }}
          _focus={{ bg: "gray.100" }}
          ref={ref}
          {...rest}
        />
        {!!error && (
          <FormErrorMessage color="red">{error.message}</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
