import logo from "../../assets/logorbm.svg";
import rocket from "../../assets/rocket.svg";
import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  @media screen and (min-width: 280px) and (max-width: 1023px) {
    height: 100%;
  }
`;

export const StyledHeader = styled.header`
  height: 76px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 45px;

  @media screen and (min-width: 280px) and (max-width: 1023px) {
    padding: 0 16px;
  }
`;

export const HeaderInnerWrapper = styled.div`
  width: 1560px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 280px) and (max-width: 1023px) {
  }
`;

export const StyledLogo = styled.img.attrs(() => ({ src: logo }))`
  width: 123px;
  height: 35px;
`;

export const ContentWrapper = styled.main`
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: calc(100% - 76px);
  justify-content: space-between;
  padding: 36px 36px;

  @media screen and (min-width: 280px) and (max-width: 1023px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    max-width: 100vw;
    gap: 48px;
  }
`;

export const FirstSection = styled.section`
  width: 700px;
  min-height: 800px;
  flex-direction: column;
  @media screen and (min-width: 280px) and (max-width: 1023px) {
    width: 100vw;
    padding: 16px;
    scroll-snap-align: start;
  }
`;

export const SecondSection = styled.section`
  width: 475px;
  height: 661px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  position: relative;
  @media screen and (min-width: 280px) and (max-width: 1023px) {
    width: 100vw;
    padding: 16px;
    height: 600px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  list-style-image: url(${rocket});
  list-style-position: inside;

  @media screen and (min-width: 280px) and (max-width: 1023px) {
    height: 320px;
  }
`;

export const FloatingButton = styled.button`
  display: none;
  @media screen and (min-width: 280px) and (max-width: 1023px) {
    position: fixed;
    display: block;
    top: 10px;
    right: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.4);
    color: ${({ theme }) => theme.colors.text2};
    background-color: ${({ theme }) => theme.colors.primary2};
    z-index: 99;
  }
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

export const BackButtonWrapper = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
