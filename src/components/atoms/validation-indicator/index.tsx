import * as Styled from "./styles";

import { faCheckCircle, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spacer from "components/particles/spacer";
import Typography from "components/particles/typography";
import { useTheme } from "styled-components";

type Validation = {
  description: string;
  regex: string;
};

type ValidationIndicatorProps = {
  validations: Validation[];
  onValid: (...args: any) => any | void;
  value: string;
};

type ValidationState = Validation & { valid: boolean };

export default function ValidationIndicator({ validations, onValid, value }: ValidationIndicatorProps) {
  const [validationsState, setValidationsState] = useState<ValidationState[]>([]);
  const theme = useTheme();

  function checkValid(regex: string, value: string) {
    if (!!regex && !!value) return new RegExp(regex).test(value);
    else return false;
  }

  useEffect(() => {
    const newValidations = validations.map((validation) => ({ ...validation, valid: false }));
    setValidationsState([...newValidations]);
  }, []);

  useEffect(() => {
    if (validationsState.length) {
      const newValidationState = validationsState.map((validation) => {
        return { ...validation, valid: checkValid(validation.regex, value) };
      });
      setValidationsState(newValidationState);
    }
  }, [value]);

  return (
    <Styled.MainWrapper>
      {validationsState.map((validation, index) => (
        <Styled.ValidationItem valid key={`${index}-${validation.description}`}>
          <FontAwesomeIcon
            icon={validation.valid ? faCheckCircle : faInfoCircle}
            color={validation.valid ? theme.colors.success : theme.colors.danger}
            width={10}
          />
          <Spacer orientation="horizontal" size={5} />
          <Typography fontStyle="10-400" color={validation.valid ? theme.colors.success : theme.colors.danger}>
            {validation.description}
          </Typography>
        </Styled.ValidationItem>
      ))}
    </Styled.MainWrapper>
  );
}
