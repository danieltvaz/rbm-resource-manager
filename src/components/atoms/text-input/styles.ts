import { TextInputProps } from ".";
import styled from "styled-components";

export const MainWrapper = styled.div<TextInputProps>`
  position: relative;
  width: ${({ width }) => width};
  margin: 24px 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1};
  outline: transparent;
  padding: 0 12px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary2};
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  top: -26px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 12px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
