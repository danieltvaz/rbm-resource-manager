import * as Styled from "./styles";

import { ComponentPropsWithoutRef } from "react";
import Typography from "../typography";

export type ButtonProps = {
  disabled?: boolean;
  width?: string;
} & ComponentPropsWithoutRef<"button">;

export default function Button({ children, disabled, width = "100%", ...props }: ButtonProps) {
  return (
    <Styled.StyledButton {...props} width={width} disabled={disabled}>
      <Typography fontStyle="16-600">{children}</Typography>
    </Styled.StyledButton>
  );
}
