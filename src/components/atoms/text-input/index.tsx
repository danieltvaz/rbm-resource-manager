import * as Styled from "./styles";

import { ComponentPropsWithoutRef, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from "components/particles/typography";
import { useTheme } from "styled-components";

export type TextInputProps = {
  label?: string;
  secured?: boolean;
  width?: string;
} & ComponentPropsWithoutRef<"input">;

export default function TextInput({ label, secured, ...props }: TextInputProps) {
  const [visible, setVisible] = useState(false);

  const theme = useTheme();

  return (
    <Styled.MainWrapper width={props.width}>
      {label && (
        <Styled.LabelWrapper>
          <Typography fontStyle="14-500" color="black">
            {label}
          </Typography>
        </Styled.LabelWrapper>
      )}
      {secured && (
        <Styled.IconWrapper role="button" onClick={() => setVisible((prev) => !prev)}>
          {visible ? (
            <FontAwesomeIcon icon={faEyeSlash} color={theme.colors.secondary1} width={24} height={24} />
          ) : (
            <FontAwesomeIcon icon={faEye} color={theme.colors.secondary1} />
          )}
        </Styled.IconWrapper>
      )}
      <Styled.StyledInput {...props} type={!visible && secured ? "password" : props.type} />
    </Styled.MainWrapper>
  );
}
