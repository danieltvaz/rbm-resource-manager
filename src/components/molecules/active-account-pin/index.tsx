import * as Styled from "./styles";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import PinInput from "components/atoms/pin-input";
import Spacer from "components/particles/spacer";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { useTheme } from "styled-components";

export default function ActiveAccountPin() {
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
        Insira abaixo o código enviado para o e-mail informado
      </Typography>
      <Spacer orientation="vertical" size={32} />
      <Typography as="label" fontStyle="14-500" textAlign="left" width="100%">
        Código
      </Typography>
      <Spacer orientation="vertical" size={4} />
      <PinInput
        digits={6}
        onComplete={(value) => {
          console.log(value);
        }}
      />
      <Spacer orientation="vertical" size={24} />
      <TextLink color={theme.colors.text1} underline textAlign="center">
        <Typography fontStyle="12-500">Reenviar código</Typography>
      </TextLink>
      <Spacer orientation="vertical" size={32} />
      <Button width="100%" onClick={() => changeStep("activate-account-password")}>
        Avançar
      </Button>
      <Spacer orientation="vertical" size={32} />
    </>
  );
}
