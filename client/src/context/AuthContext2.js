import { createContext, useReducer } from "react";
import AuthReducer2 from "./AuthReducer2";

const INITIAL_STATE = {
  user2: [],
  isLoggedIn2: false,
  token2: "",
};

export const AuthContext2 = createContext(INITIAL_STATE);

export const AuthContext2Provider = ({ children }) => {
  const [state2, dispatch2] = useReducer(AuthReducer2, INITIAL_STATE);

  return (
    <AuthContext2.Provider
      value={{
        user2: state2.user2,
        isLoggedIn2: state2.isLoggedIn2,
        token2: state2.token,
        dispatch2,
      }}
    >
      {children}
    </AuthContext2.Provider>
  );
};
