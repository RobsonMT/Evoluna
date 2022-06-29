import { MotionContainer } from "../components/MotionContainer";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { theme } from "../styles/theme";
import { Select } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Steps } from "../components/Steps";

export const StepOne = () => {
  // const [state, setState] = useState("");
  // const options = [
  //   { label: "Green", value: "green" },
  //   { label: "Green-Yellow", value: "greenyellow" },
  //   { label: "Red", value: "red" },
  // ];

  // useEffect(() => {
  //   console.log("state", state);
  // });

  return (
    <MotionContainer>
      <Grid minH="100vh" justifyItems="center" alignItems="center">
        <Steps />
      </Grid>
    </MotionContainer>
  );
};
