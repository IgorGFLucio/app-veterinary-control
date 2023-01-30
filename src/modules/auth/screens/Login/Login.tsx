import { theme } from "@libs/styled-components/theme";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import Header from "@components/Header/header";
import { NavigationProps, Route } from "@entities/Navigation";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";
import { LoginProps } from "./types";
import { emailRegExp } from "@utils/helpers/emailValidation";

const LoginScreen = () => {
  const { navigate, goBack } = useNavigation<NavigationProps>();
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<LoginProps>();

  return (
    <>
      <Header
        leftNode={
          <Ionicons name="chevron-back" size={24} color={theme.color.white} />
        }
        centerNode={<Text className="text-lg font-bold text-white">Login</Text>}
        rightNode={<View className="w-[24] h-[24]" />}
        backgroundColor="#005DA6"
        onPressLeftNode={goBack}
      />
      <View className="px-8">
        <View className="flex items-start justify-center mt-14">
          <TextInput
            placeholder="Email"
            className="w-full px-2 py-4 mt-1 text-lg leading-5 border-b border-gray-400 border-solid"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="w-full px-2 py-4 mt-8 text-lg leading-5 border-b border-gray-400 border-solid"
          />

          <View className="flex flex-row justify-between w-full mt-6">
            <View className="flex-row">
              <Text>No account?</Text>
              <Pressable onPress={() => console.log("Register")}>
                <Text className="text-[#005DA6]"> Create one!</Text>
              </Pressable>
            </View>
            <Pressable onPress={() => console.log("Forgot Password")}>
              <Text className="text-[#005DA6]">Forgot Password?</Text>
            </Pressable>
          </View>
          <Pressable
            className="bg-[#005DA6] mt-12 w-full items-center justify-center py-2"
            onPress={() => {
              Alert.alert("Login successful");
              navigate(Route.Home);
            }}
          >
            <Text className="text-xl font-semibold text-white uppercase">
              Login
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
