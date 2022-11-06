import { SpacerProps } from ".";
import styled from "styled-components";

export const StyledSpacer = styled.div<SpacerProps>`
  width: ${({ orientation, size }) => (orientation === "horizontal" ? size + "px" : 1)};
  height: ${({ orientation, size }) => (orientation === "horizontal" ? 1 : size + "px")};
`;
