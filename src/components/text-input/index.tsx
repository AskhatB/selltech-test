import { FC, ReactElement } from "react";
import { StyledTextInput } from "./styles";

interface TextInputProps {
  placeholder?: string;
  isError?: boolean;
}

const TextInput: FC<TextInputProps> = ({
  placeholder,
  isError,
}): ReactElement => {
  return (
    <StyledTextInput type="text" placeholder={placeholder} isError={isError} />
  );
};

TextInput.defaultProps = {
  placeholder: "",
  isError: false,
};

export default TextInput;
