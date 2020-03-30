import styled from "styled-components";
import { space, layout, color, SpaceProps, ColorProps, LayoutProps } from "styled-system";

type BoxProps = SpaceProps | LayoutProps | ColorProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
`;
