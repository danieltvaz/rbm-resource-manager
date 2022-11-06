import { THEME } from "./constants";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary1: string;
      primary2: string;
      primary3: string;
      secondary1: string;
      secondary2: string;
      secondary3: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      text1: string;
      text2: string;
      danger: string;
      success: string;
    };
  }
}
