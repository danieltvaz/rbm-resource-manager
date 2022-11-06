import { DetailedHTMLProps, HTMLAttributes } from "react";

import styled from "styled-components";

export type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "label";
  fontStyle: string;
  textAlign?: "left" | "center" | "right";
  htmlFor?: string;
  width?: string;
} & DetailedHTMLProps<HTMLAttributes<any>, any>;

type StyledTextProps = {
  fontWeight: string;
  fontSize: string;
  textAlign: "left" | "center" | "right";
} & TypographyProps;

export default function Typography({ as = "p", textAlign = "center", ...props }: TypographyProps) {
  function parseFontStyle(fontStyle: string) {
    const fontStyles = fontStyle.split("-");
    const fontSize = fontStyles[0];
    const fontWeight = fontStyles[1];
    return { fontSize, fontWeight };
  }

  const StyledText = styled[as]`
    font-weight: ${({ fontWeight }: Partial<StyledTextProps>) => fontWeight};
    font-size: ${({ fontSize }: Partial<StyledTextProps>) => fontSize}px;
    color: ${({ color }) => color};
    text-align: ${({ textAlign }: Partial<StyledTextProps>) => textAlign};
    line-height: 1.6;
    width: ${({ width }: Partial<StyledTextProps>) => width};
  `;

  return (
    //@ts-ignore
    <StyledText
      fontSize={parseFontStyle(props.fontStyle).fontSize}
      fontWeight={parseFontStyle(props.fontStyle).fontWeight}
      color={props.color}
      textAlign={textAlign}
      {...props}>
      {props.children}
    </StyledText>
  );
}
