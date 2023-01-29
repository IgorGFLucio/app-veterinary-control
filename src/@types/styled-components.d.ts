import "@types/styled-components-react-native";
import "@types/styled-components";
import { theme } from "@libs/styled-components/theme";

type ThemeInterface = typeof theme;

declare module "styled-components/native" {
  interface DefaultTheme extends ThemeInterface {}
}

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
