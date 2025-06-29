import { useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { loginAPI, registerAPI } from "../APIs/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || "");

  const login = async (credentials) => {
    const res = await loginAPI(credentials);
    setUser(res.user);
    setToken(res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    localStorage.setItem("token", res.token);
  };

  const register = async (data) => {
    const res = await registerAPI(data);
    setUser(res.user);
    setToken(res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    localStorage.setItem("token", res.token);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
