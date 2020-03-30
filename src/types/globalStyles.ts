import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    space: object;
    colors: {
      body: string;
      text: string;
      white: string;
      grey: string;
      primary: string;
    };
  }
}
