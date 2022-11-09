import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";

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

type Forms = {
  email?: string;
  pin?: string;
  password?: string;
};

type Context = {
  changeStep: (step: Step) => void;
  step: Step;
  forms: Forms;
  setForms: Dispatch<SetStateAction<Forms>>;
};

const Context = createContext<Context>({} as Context);

export default function OnboardingContextProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<Step>("login");
  const [forms, setForms] = useState<Forms>({
    email: "",
    password: "",
    pin: "",
  } as Forms);

  function changeStep(newStep: Step) {
    setStep(newStep);
  }

  return <Context.Provider value={{ changeStep, step, forms, setForms }}>{children}</Context.Provider>;
}

export const OnboardingContext = () => useContext(Context);
