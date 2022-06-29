import { MotionContainer } from "../components/MotionContainer";
import { Heading } from "@chakra-ui/react";
import { InputSelect } from "../components/InputSelect";
import { useEffect, useState } from "react";

export const StepOne = () => {
  const [state, setState] = useState("");
  const options = [
    { label: "Green", value: "green" },
    { label: "Green-Yellow", value: "greenyellow" },
    { label: "Red", value: "red" },
  ];

  useEffect(() => {
    console.log("state", state);
  });

  return (
    <MotionContainer>
      <Heading>StepOne</Heading>
      <InputSelect options={options} setState={setState} />
    </MotionContainer>
  );
};
