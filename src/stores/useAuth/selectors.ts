import { State } from "./types";

export const selectToken = (state: State) => state.token;
export const selectIsAuthenticated = (state: State) => state.isAuthenticated;
export const selectSetAuth = (state: State) => state.setAuth;
