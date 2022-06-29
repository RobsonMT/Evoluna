import { Select } from "chakra-react-select";

type OptionType = {
  label: string;
  value: string;
};

interface IInputSelectProps {
  options: OptionType[];
  setState: (value: string) => void;
}

export const InputSelect = ({ setState, options }: IInputSelectProps) => {
  return (
    <Select
      colorScheme="purple"
      options={options}
      onChange={(e) => setState(e!.value)}
    />
  );
};
