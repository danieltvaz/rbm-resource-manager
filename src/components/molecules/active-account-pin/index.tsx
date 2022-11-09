import * as Styled from "./styles";

import { useEffect, useState } from "react";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import PinInput from "components/atoms/pin-input";
import { RequestAtivarParams } from "services/api/base/types";
import Spacer from "components/particles/spacer";
import TextLink from "components/particles/text-link";
import Typography from "components/particles/typography";
import { requestAtivar } from "services/api/base";
import useRequest from "hooks/useRequest";
import { useTheme } from "styled-components";

export default function ActiveAccountPin() {
  const theme = useTheme();
  const { changeStep, forms, setForms } = OnboardingContext();
  const [state, request] = useRequest();

  async function requestActivateAccount() {
    try {
      await request(requestAtivar, "request_ativar", { login: forms.email, token: forms.pin } as RequestAtivarParams);
    } catch {}
  }

  useEffect(() => {
    if (forms.pin && !state.loading.request_ativar) {
      requestActivateAccount();
    }
  }, [forms.pin]);

  useEffect(() => {
    if (state.result.request_ativar) {
      changeStep("activate-account-password");
    }
  }, [state.result.request_ativar]);

  useEffect(() => {
    if (state.error.request_ativar) {
      alert("deu merda");
    }
  }, [state.error.request_ativar]);

  useEffect(() => {
    console.log(forms);
  }, [forms]);

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
          setForms((forms) => ({ ...forms, pin: value }));
        }}
      />
      <Spacer orientation="vertical" size={24} />
      <TextLink color={theme.colors.text1} underline textAlign="center">
        <Typography fontStyle="12-500">Reenviar código</Typography>
      </TextLink>
      <Spacer orientation="vertical" size={32} />

      <Spacer orientation="vertical" size={32} />
    </>
  );
}
