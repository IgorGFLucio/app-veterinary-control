import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamsList } from "./types";

// Screens
import HomeScreen from "@home/screens/Home";
import LoginScreen from "@auth/screens/Login/Login";

enableScreens();
const Stack = createNativeStackNavigator<StackParamsList>();

const ANIMATION = `slide_from_right`;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        {/* Home Routes */}
        <Stack.Group screenOptions={{ animation: ANIMATION }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Group>
        {/* Auth Routes */}
        <Stack.Group screenOptions={{ animation: ANIMATION }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
