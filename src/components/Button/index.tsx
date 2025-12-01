import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabledButton, onClick }: IButtonProps) => {
  return <ButtonContainer disabledButton={disabledButton} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
