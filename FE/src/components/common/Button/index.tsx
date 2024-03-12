import React, { ReactNode, memo } from 'react';
import { ButtonStyle } from './style'; // Assuming this import is correct
import { ButtonProps } from '@mui/material';
import { ButtonType } from '../../../enums/enum';

export interface CusButtonProps extends ButtonProps {
  text?: string;
  theme?: ButtonType;
  children?: ReactNode;
  handleClick?: () => void;
}

export const Button: React.FC<CusButtonProps> = memo(({ text, theme, children, handleClick, ...rest }) => {
  return (
    <ButtonStyle
    className={`btn-custom btn-${theme}`}
    onClick={handleClick}
    {...rest}>
      {text}
      {children}
    </ButtonStyle>
  );
});

Button.defaultProps = {
  theme: ButtonType.PRIMARY,
  variant: 'contained',
};
