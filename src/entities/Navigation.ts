import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "@routes/types";

export interface NavigationProps<T extends keyof StackParamsList = Route.Home> {
  navigate: (route: Route, state?: RouteProps<T>["route"]["params"]) => void;
  goBack: () => void;
}

export type RouteProps<T extends keyof StackParamsList = Route.Home> =
  NativeStackScreenProps<StackParamsList, T>;

export enum Route {
  Home = "Home",
  Login = "Login",
}
