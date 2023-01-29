import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";
import { State } from "./types";

export const useAuth = create(
  persist<State>(
    (set) => {
      const setAuth = ({
        isAuthenticated,
        token,
        refreshToken,
      }: Pick<State, "token" | "isAuthenticated" | "refreshToken">) => {
        set(() => ({ token, isAuthenticated, refreshToken }));
      };

      const clearAuth = () => {
        set(() => ({
          token: undefined,
          isAuthenticated: false,
          refreshToken: undefined,
        }));
      };

      return {
        isAuthenticated: false,
        token: undefined,
        refreshToken: undefined,
        setAuth,
        clearAuth,
      };
    },
    {
      name: "supervia-auth",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useAuth;

export * from "./selectors";
