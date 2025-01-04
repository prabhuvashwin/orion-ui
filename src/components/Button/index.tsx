import styled, { css } from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button<Omit<ButtonProps, 'label'>>`
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  ${({ primary, theme }) => 
    primary
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `
      : css`
          background-color: transparent;
          border: 1px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        `
  }

  ${({ size = 'medium', theme }) => css`
    padding: ${theme.sizes[size].padding};
    font-size: ${theme.sizes[size].fontSize};
  `}

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <StyledButton {...props}>
      {label}
    </StyledButton>
  );
};