import { Route, Routes } from "react-router";

import AuthContextProvider from "contexts/auth-context";
import OnboardingModule from "pages/onboarding";
import ThemeContext from "contexts/theme-context";
import useTheme from "hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeContext theme={theme}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<OnboardingModule />} />
          <Route path="/dashboard" element={<div />} />
        </Routes>
      </AuthContextProvider>
    </ThemeContext>
  );
}

export default App;
