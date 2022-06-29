import { Select } from "chakra-react-select";

type OptionType = {
  label: string;
  value: string;
};

interface IInputSelectProps {
  placeholder?: string;
  options: OptionType[];
  setState: (value: string) => void;
}

export const InputSelect = ({
  placeholder,
  options,
  setState,
}: IInputSelectProps) => {
  return (
    <Select
      colorScheme="purple"
      options={options}
      placeholder={placeholder ?? "Selecione"}
      onChange={(e) => setState(e!.value)}
    />
  );
};
