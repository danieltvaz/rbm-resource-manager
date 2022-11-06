import * as Styled from "./styles";

import { AnchorHTMLAttributes, Children, ClassAttributes } from "react";

type TextLinkProps = {
  color: string;
  underline?: boolean;
  textAlign?: "left" | "center" | "right";
  to?: string;
};

export default function TextLink({ ...props }: JSX.IntrinsicAttributes & AnchorHTMLAttributes<HTMLAnchorElement> & TextLinkProps) {
  if (props.to?.includes("http"))
    return (
      <Styled.StyledRouterLink {...props} to={props.to ?? ""}>
        {props.children}
      </Styled.StyledRouterLink>
    );
  return <Styled.StyledLink {...props}>{props.children}</Styled.StyledLink>;
}
