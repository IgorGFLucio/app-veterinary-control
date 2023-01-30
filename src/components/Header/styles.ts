import styled from "styled-components/native";
import { BackgroundViewProps } from "./types";

export const Container = styled.View<
  Pick<BackgroundViewProps, "backgroundColor">
>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? `#ffffff`};
`;

export const BackgroundView = styled.View<BackgroundViewProps>`
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? `#ffffff`};
  border-bottom-color: ${({ theme, shadowColor }) =>
    shadowColor ?? theme.color.gray[200]};
`;
