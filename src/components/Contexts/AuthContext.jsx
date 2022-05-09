import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = () => {
  const [isAuth, setAuth] = useState(false);

  const handleAuth = () => {
      
  };

  return <AuthContext.Provider></AuthContext.Provider>;
};
