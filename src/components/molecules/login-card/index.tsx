import * as Styled from "./styles";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import Spacer from "components/particles/spacer";
import TextInput from "components/atoms/text-input";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { useAuth } from "contexts/auth-context";
import { useState } from "react";
import { useTheme } from "styled-components";

export default function LoginCard() {
  const theme = useTheme();
  const { changeStep } = OnboardingContext();
  const { login } = useAuth();

  const [inputs, setInputs] = useState({ email: "", password: "" });

  return (
    <>
      <Styled.StyledLogo />
      <Spacer orientation="vertical" size={52} />
      <Typography color="black" fontStyle="20-700">
        Entrar na minha conta
      </Typography>
      <Spacer orientation="vertical" size={10} />
      <Typography color="black" fontStyle="14-400">
        Acesse sua conta abaixo =)
      </Typography>
      <Spacer orientation="vertical" size={32} />
      <TextInput
        width="100%"
        label="E-mail"
        placeholder="Digite seu email"
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs((inputs) => ({ ...inputs, email: e.target.value }))}
      />
      <TextInput
        width="100%"
        label="Senha"
        placeholder="Digite a sua senha"
        secured
        value={inputs.password}
        onChange={(e) => setInputs((inputs) => ({ ...inputs, password: e.target.value }))}
      />
      <Styled.SaveLoginWrapper>
        <Styled.CheckboxWrapper>
          <input type="checkbox" id="save-login-input" />
          <Spacer orientation="horizontal" size={4} />
          <Typography fontStyle="14-400" as="label" htmlFor="save-login-input">
            Salvar login
          </Typography>
        </Styled.CheckboxWrapper>
        <TextLink textAlign="right" underline color={theme.colors.text1} onClick={() => changeStep("recover-password")}>
          Esqueci a senha
        </TextLink>
      </Styled.SaveLoginWrapper>
      <Spacer orientation="vertical" size={24} />

      <Button width="100%" onClick={() => login(inputs.email, inputs.password)}>
        Entrar
      </Button>
      <Spacer orientation="vertical" size={32} />

      <TextLink textAlign="center" underline color={theme.colors.text1} onClick={() => changeStep("activate-account")}>
        Primeiro acesso? <strong>Ative sua conta</strong>
      </TextLink>
    </>
  );
}
