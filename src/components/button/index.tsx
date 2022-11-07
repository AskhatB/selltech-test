import { FC, ReactElement } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  children: ReactElement | ReactElement[] | string;
  type?: "submit" | "button" | "reset";
  fluid?: boolean;
}

const Button: FC<ButtonProps> = ({ children, type, fluid }): ReactElement => {
  return (
    <StyledButton type={type} fluid={fluid || false}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  fluid: false,
};

export default Button;
