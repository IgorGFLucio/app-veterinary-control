export interface State {
  isAuthenticated?: boolean;
  token?: string;
  refreshToken?: string;
  setAuth: (
    props: Pick<State, "token" | "isAuthenticated" | "refreshToken">
  ) => void;
  clearAuth: () => void;
}
