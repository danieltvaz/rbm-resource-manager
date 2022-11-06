import * as Styled from "./styles";

export type SpacerProps = {
  orientation: "vertical" | "horizontal";
  size: number;
};

export default function Spacer(props: SpacerProps) {
  return <Styled.StyledSpacer {...props} />;
}
