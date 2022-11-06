import styled from "styled-components";

export const Input = styled.input`
  width: 54px;
  height: 54px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 280px) and (max-width: 320px) {
    width: 36px;
    height: 36px;
  }
`;

export const PinInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 450px;
`;
