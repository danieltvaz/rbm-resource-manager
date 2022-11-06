import * as Styled from "./styles";

import ActivateAccountPassword from "components/molecules/active-account-password";
import ActiveAccountCard from "components/molecules/active-account-card";
import ActiveAccountPin from "components/molecules/active-account-pin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginCard from "components/molecules/login-card";
import { OnboardingContext } from "./contexts";
import RecoverPasswordCard from "components/molecules/recover-password-card";
import RecoverPasswordNewPassword from "components/molecules/recover-password-password";
import RecoverPasswordPin from "components/molecules/recover-password-pin";
import Spacer from "components/particles/spacer";
import SuccessCard from "components/molecules/success-card";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import { useTheme } from "styled-components";

const TEAM = [
  "Paulo",
  "Yago",
  "Maisa",
  "Lucas",
  "Yuri",
  "Nycolas",
  "Romney",
  "Natã",
  "Adriel",
  "Carlinho",
  "Rhuan",
  "Ana",
  "Marcello",
  "Diego",
  "Matheus",
  "Eduardo",
  "Alessandra",
  "Vitor",
  "Davi",
  "Gabriel",
  "Bruno",
];

type Steps =
  | "login"
  | "recover-password"
  | "recover-password-pin"
  | "recover-password-new-password"
  | "recover-password-success"
  | "activate-account"
  | "activate-account-pin"
  | "activate-account-password"
  | "activate-account-success";

export default function OnboardingScreen() {
  const { step, changeStep } = OnboardingContext();
  const theme = useTheme();

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight });
  }

  const CardsRender = memo(() => {
    switch (step) {
      case "login":
        return <LoginCard />;

      case "activate-account":
        return <ActiveAccountCard />;

      case "activate-account-pin":
        return <ActiveAccountPin />;

      case "activate-account-password":
        return <ActivateAccountPassword />;

      case "activate-account-success":
        return (
          <SuccessCard
            title="Conta ativada!"
            description="Sua conta foi ativada. Faça login e acesse sua conta."
            action={() => changeStep("login")}
          />
        );

      case "recover-password":
        return <RecoverPasswordCard />;

      case "recover-password-pin":
        return <RecoverPasswordPin />;

      case "recover-password-new-password":
        return <RecoverPasswordNewPassword />;

      case "recover-password-success":
        return (
          <SuccessCard
            title="Senha alterada!"
            description="Senha alterada com sucesso. Faça login e acesse sua conta."
            action={() => changeStep("login")}
          />
        );

      default:
        return <LoginCard />;
    }
  });

  return (
    <Styled.MainWrapper>
      <Styled.FloatingButton onClick={scrollToBottom}>Entrar</Styled.FloatingButton>
      <Styled.StyledHeader>
        <Styled.HeaderInnerWrapper>
          <Styled.StyledLogo />
        </Styled.HeaderInnerWrapper>
      </Styled.StyledHeader>
      <Styled.ContentWrapper>
        <Styled.FirstSection>
          <Styled.TitleWrapper>
            <Typography as="h1" fontStyle="62-700" color={theme.colors.primary2}>
              SIGR
            </Typography>
            <Typography fontStyle="31-400" color={theme.colors.text1} as="h2">
              Sistema Interno de Gerenciamento de Recursos
            </Typography>
          </Styled.TitleWrapper>
          <Spacer orientation="vertical" size={48} />
          <Styled.DescriptionWrapper>
            <Typography as="p" color={theme.colors.text1} fontStyle="18-400">
              Com o <strong>SIGR</strong> é possível agendar o uso de recursos físicos da{" "}
              <TextLink textAlign="center" href="https://www.rbmweb.com.br" target="_blank" color={theme.colors.primary2}>
                {" "}
                RBM WEB by Dimensa
              </TextLink>
              . A idéia surgiu no curso de Typescript + React, por um grupo de alunos, como projeto sugerido a resolver um problema real.
            </Typography>
            <Spacer orientation="vertical" size={24} />
            <Typography as="h3" color={theme.colors.text1} fontStyle="18-600">
              Equipe
            </Typography>
            <Spacer orientation="vertical" size={24} />
            <Styled.List>
              {TEAM.map((teamMate, index) => (
                <li key={index + "team-list"}>{teamMate}</li>
              ))}
            </Styled.List>
          </Styled.DescriptionWrapper>
        </Styled.FirstSection>
        <Styled.SecondSection>
          {step !== "login" && (
            <Styled.BackButtonWrapper role="button" onClick={() => changeStep("login")}>
              <FontAwesomeIcon icon={faTimes} color={theme.colors.primary2} />
            </Styled.BackButtonWrapper>
          )}
          <CardsRender />
        </Styled.SecondSection>
      </Styled.ContentWrapper>
    </Styled.MainWrapper>
  );
}
