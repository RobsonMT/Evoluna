import { MotionContainer } from "../components/MotionContainer";
import { Grid } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import { Steps } from "../components/Steps";
import { Header } from "../components/Header";

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
      <Header />
      <Grid minH="100vh" justifyItems="center" alignItems="center">
        <Steps />
      </Grid>
    </MotionContainer>
  );
};
