import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledRouterLink = styled(Link)<{ underline?: boolean; textAlign?: string }>`
  color: ${({ color }) => color};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  cursor: pointer;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || null};
`;

export const StyledLink = styled.a<{ underline?: boolean; textAlign?: string }>`
  color: ${({ color }) => color};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  cursor: pointer;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || null};
`;
