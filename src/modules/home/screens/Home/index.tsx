import { NavigationProps, Route } from "@entities/Navigation";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Pressable } from "react-native";

const HomeScreen = () => {
  const { navigate, goBack } = useNavigation<NavigationProps>();

  return (
    <SafeAreaView>
      <View className="flex items-center justify-center">
        <Text className="text-2xl">Home</Text>
        <Pressable
          onPress={() => navigate(Route.Login)}
          className="px-8 py-4 mt-8 bg-blue-600 border border-gray-300 border-solid"
        >
          <Text className="font-semibold text-white uppercase">Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
