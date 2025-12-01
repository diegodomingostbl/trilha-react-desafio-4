export interface IButtonProps {
    title: string;
    disabledButton?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonContainerStyled extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabledButton?: boolean;
}