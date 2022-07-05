import { Box } from "@chakra-ui/react";
import styled from "styled-components";

interface IColorMode {
  colorMode: string;
}

export const DatePickerWrapper = styled(Box)<IColorMode>`
  input,
  .react-datepicker-ignore-onclickoutside {
    text-align: center;
    border: 1px solid;
    border-color: ${({ colorMode }) =>
      colorMode === "light" ? "rgb(179, 182, 185)" : "rgb(67, 64, 64)"};
    border-radius: 5px;
    height: 35px;
    width: 100%;
  }
`;
