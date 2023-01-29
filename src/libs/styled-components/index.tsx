import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

const StyledComponentsProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsProvider;
