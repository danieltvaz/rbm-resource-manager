import logo from "../../../assets/logorbm.svg";
import styled from "styled-components";
import success from "../../../assets/sucess.svg";

export const StyledLogo = styled.img.attrs(() => ({ src: logo }))`
  width: 123px;
  height: 35px;
`;

export const StyledIcon = styled.img.attrs(() => ({ src: success }))`
  width: 100px;
  height: 100px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SaveLoginWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
`;
