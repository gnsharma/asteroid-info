import * as React from "react";
import { useLocalStorage } from "usehooks-ts";

interface AuthContextType {
  user: LoginFormValues | null;
  signin: (user: LoginFormValues, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useLocalStorage<LoginFormValues | null>("user", null);
  const signin = (newUser: LoginFormValues, callback: VoidFunction) => {
    setUser(newUser);
    callback();
  };
  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
  };

  const value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
