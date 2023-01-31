import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

interface PageHeaderProps {
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  centerNode?: ReactNode;
  onPressLeftNode?: (event: GestureResponderEvent) => void;
  onPressRightNode?: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  shadowColor?: string;
}

interface BackgroundViewProps {
  marginTop: number;
  shadowColor: string;
  backgroundColor: string;
}

export type { PageHeaderProps, BackgroundViewProps };
