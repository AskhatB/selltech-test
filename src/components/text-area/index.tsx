import { FC, ReactElement } from "react";
import { StyledTextArea } from "./styles";

interface TextAreaProps {
  placeholder?: string;
  isError?: boolean;
}

const TextArea: FC<TextAreaProps> = ({
  placeholder,
  isError,
}): ReactElement => {
  return <StyledTextArea placeholder={placeholder} isError={isError} />;
};

TextArea.defaultProps = {
  placeholder: "",
  isError: false,
};

export default TextArea;
