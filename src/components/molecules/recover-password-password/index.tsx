import * as Styled from "./styles";

import { useEffect, useState } from "react";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import { RequestCriarSenhaParams } from "services/api/base/types";
import Spacer from "components/particles/spacer";
import TextInput from "components/atoms/text-input";
import Typography from "components/particles/typography";
import ValidationIndicator from "components/atoms/validation-indicator";
import { requestCriarSenha } from "services/api/base";
import useRequest from "hooks/useRequest";

const VALIDATIONS = [
  {
    description: "Mínimo de 8 caracteres",
    regex: "[A-Za-z0-9]{8,}",
  },
  {
    description: "Pelo menos uma letra minúscula",
    regex: "[a-z]",
  },
  {
    description: "Pelo menos uma letra maiúscula",
    regex: "[A-Z]",
  },
  {
    description: "Pelo menos um número",
    regex: "[0-9]",
  },
  {
    description: "Pelo menos um dos caracteres especiais a seguir: (!@#$%^&*)",
    regex: "[!@#$%^&*]",
  },
];

export default function RecoverPasswordNewPassword() {
  const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
  const [state, request] = useRequest();

  return (
    <>
      <Styled.StyledLogo />
      <Spacer orientation="vertical" size={52} />
      <Typography color="black" fontStyle="20-700">
        Recuperar senha
      </Typography>
      <Spacer orientation="vertical" size={10} />
      <Typography color="black" fontStyle="14-400">
        Redefina abaixo a senha da conta.
      </Typography>
      <Spacer orientation="vertical" size={18} />
      <Typography fontStyle="12-400" width="100%">
        Por segurança, a senha deve seguir os critérios abaixo:
      </Typography>
      <Spacer orientation="vertical" size={4} />
      <ValidationIndicator onValid={() => {}} validations={VALIDATIONS} value={passwords.password} />
      <Spacer orientation="vertical" size={32} />
      <TextInput
        width="100%"
        label="Senha"
        placeholder="Nova senha"
        secured
        value={passwords.password}
        onChange={(e) => setPasswords((prev) => ({ ...prev, password: e.target.value }))}
      />
      <TextInput
        width="100%"
        label="Confirmar senha"
        placeholder="Confirmar nova senha"
        secured
        value={passwords.confirmPassword}
        onChange={(e) => setPasswords((prev) => ({ ...prev, confirmPassword: e.target.value }))}
      />
      <Button width="100%" onClick={() => {}}>
        Trocar senha
      </Button>
    </>
  );
}
