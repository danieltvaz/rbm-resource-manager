import * as Styled from "./styles";

import Button from "components/particles/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OnboardingContext } from "pages/onboarding/contexts";
import Spacer from "components/particles/spacer";
import TextInput from "components/atoms/text-input";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";

export default function ActiveAccountCard() {
  const theme = useTheme();
  const { changeStep } = OnboardingContext();
  return (
    <>
      <Styled.StyledLogo />
      <Spacer orientation="vertical" size={52} />
      <Typography color="black" fontStyle="20-700">
        Ativar minha conta
      </Typography>
      <Spacer orientation="vertical" size={10} />
      <Typography color="black" fontStyle="14-400">
        Informe seu e-mail corporativo
      </Typography>
      <Spacer orientation="vertical" size={32} />
      <TextInput width="100%" label="E-mail" placeholder="Digite seu email" type="email" />
      <Button width="100%" onClick={() => changeStep("activate-account-pin")}>
        Avançar
      </Button>
      <Spacer orientation="vertical" size={32} />
      <Styled.InfoWrapper>
        <FontAwesomeIcon icon={faCircleInfo} />
        <Spacer orientation="horizontal" size={6} />
        <Typography fontStyle="10-400" color={theme.colors.text1}>
          Caso ainda não tenha recebido seu e-mail, entre em contato com o RH
        </Typography>
      </Styled.InfoWrapper>
    </>
  );
}
