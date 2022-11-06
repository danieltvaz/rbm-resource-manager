import * as Styled from "./styles";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import Spacer from "components/particles/spacer";
import TextInput from "components/atoms/text-input";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { useTheme } from "styled-components";

export default function RecoverPasswordCard() {
  const theme = useTheme();
  const { changeStep } = OnboardingContext();
  return (
    <>
      <Styled.StyledLogo />
      <Spacer orientation="vertical" size={52} />
      <Typography color="black" fontStyle="20-700">
        Recuperar senha
      </Typography>
      <Spacer orientation="vertical" size={10} />
      <Typography color="black" fontStyle="14-400">
        Informe seu e-mail empresarial
      </Typography>
      <Spacer orientation="vertical" size={32} />
      <TextInput width="100%" label="E-mail" placeholder="Digite seu email" type="email" />
      <Spacer orientation="vertical" size={24} />
      <Button width="100%" onClick={() => changeStep("recover-password-pin")}>
        Avançar
      </Button>
    </>
  );
}
