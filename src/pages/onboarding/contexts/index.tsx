import { ReactNode, createContext, useContext, useState } from "react";

type Step =
  | "login"
  | "recover-password"
  | "recover-password-pin"
  | "recover-password-new-password"
  | "recover-password-success"
  | "activate-account"
  | "activate-account-pin"
  | "activate-account-password"
  | "activate-account-success";

type Context = {
  changeStep: (step: Step) => void;
  step: Step;
};

const Context = createContext<Context>({} as Context);

export default function OnboardingContextProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<Step>("login");

  function changeStep(newStep: Step) {
    setStep(newStep);
  }

  return <Context.Provider value={{ changeStep, step }}>{children}</Context.Provider>;
}

export const OnboardingContext = () => useContext(Context);
