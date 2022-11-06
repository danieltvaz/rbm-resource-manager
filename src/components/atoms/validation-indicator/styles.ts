import { memo } from "react";
import styled from "styled-components";

export const MainWrapper = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ValidationItem = memo(styled.li<{ valid: boolean }>`
  color: ${({ theme, valid }) => (valid ? theme.colors.success : theme.colors.danger)};
  display: flex;
  align-items: center;
`);
