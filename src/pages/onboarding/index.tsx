import OnboardingContextProvider from "./contexts";
import OnboardingScreen from "./onboarding-page";

export default function OnboardingModule() {
  return (
    <OnboardingContextProvider>
      <OnboardingScreen />
    </OnboardingContextProvider>
  );
}
