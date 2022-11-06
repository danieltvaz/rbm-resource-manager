import { ButtonProps } from ".";
import styled from "styled-components";

export const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.colors.primary2};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text2};
  height: 58px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary1};
    border: 5px inset ${({ theme }) => theme.colors.primary2};
  }
`;
