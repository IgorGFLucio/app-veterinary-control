import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackgroundView, Container } from "./styles";
import { PageHeaderProps } from "./types";

const Header = ({
  leftNode,
  centerNode,
  rightNode,
  onPressLeftNode,
  onPressRightNode,
  backgroundColor,
  shadowColor,
}: PageHeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <Container backgroundColor={backgroundColor}>
      <BackgroundView
        backgroundColor={backgroundColor}
        shadowColor={shadowColor}
        marginTop={top}
        className="flex-row items-center justify-between p-4 border-b"
      >
        <Pressable onPress={onPressLeftNode}>{leftNode}</Pressable>
        {centerNode}
        <Pressable onPress={onPressRightNode}>{rightNode}</Pressable>
      </BackgroundView>
    </Container>
  );
};

export default Header;
