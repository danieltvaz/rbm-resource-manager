import * as Styled from "./styles";

import { useEffect, useState } from "react";

import Button from "components/particles/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OnboardingContext } from "pages/onboarding/contexts";
import { RequestPedirAtivacao } from "services/api/base/types";
import Spacer from "components/particles/spacer";
import TextInput from "components/atoms/text-input";
import Typography from "components/particles/typography";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { requestPedirAtivacao } from "services/api/base";
import useRequest from "hooks/useRequest";
import { useTheme } from "styled-components";

export default function ActiveAccountCard() {
  const theme = useTheme();
  const { changeStep, setForms, forms } = OnboardingContext();
  const [state, request] = useRequest();
  const [email, setEmail] = useState("");

  async function requestActivate() {
    try {
      await request(requestPedirAtivacao, "activate", { login: email } as RequestPedirAtivacao);
    } catch {}
  }

  useEffect(() => {
    if (state.result.activate) {
      setForms((forms) => ({ ...forms, email }));
      changeStep("activate-account-pin");
    }
  }, [state.result.activate]);

  useEffect(() => {
    if (state.error.activate) {
      alert("deu merda");
    }
  }, [state.error.activate]);

  function next() {
    requestActivate();
  }

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
      <TextInput width="100%" label="E-mail" placeholder="Digite seu email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <Button width="100%" onClick={next}>
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
