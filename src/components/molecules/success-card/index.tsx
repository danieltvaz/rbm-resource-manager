import * as Styled from "./styles";

import Button from "components/particles/button";
import { OnboardingContext } from "pages/onboarding/contexts";
import Spacer from "components/particles/spacer";
import Typography from "components/particles/typography";
import { useTheme } from "styled-components";

type SuccessCardProps = {
  title: string;
  description: string;
  action: (...args: any) => any | void;
};

export default function SuccessCard({ title, description, action }: SuccessCardProps) {
  const theme = useTheme();
  const { changeStep } = OnboardingContext();
  return (
    <>
      <Styled.StyledLogo />
      <Spacer orientation="vertical" size={100} />
      <Styled.StyledIcon />
      <Spacer orientation="vertical" size={24} />
      <Typography color="black" fontStyle="20-700">
        {title}
      </Typography>
      <Spacer orientation="vertical" size={28} />
      <Typography color="black" fontStyle="14-400" width="250px" textAlign="center">
        {description}
      </Typography>
      <Spacer orientation="vertical" size={128} />

      <Button onClick={action}>FAZER LOGIN</Button>
    </>
  );
}
