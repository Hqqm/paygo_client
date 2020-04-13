import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from "styled-system";

type BoxProps = SpaceProps | LayoutProps | ColorProps | FlexboxProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;
