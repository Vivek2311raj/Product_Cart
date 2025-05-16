import { createContext, useState } from "react";

export const AuthContext = createContext({
  loginStatus: "",
  updateLoginStatus: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false);

  const updateLoginStatus = (val) => {
    setLoginStatus(val);
  };

  const ProviderValues = {
    loginStatus,
    updateLoginStatus,
  };

  return (
    <AuthContext.Provider value={ProviderValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
