import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import httpClient from "../utils/http-client";
import { BaseHttpResponse } from "../utils/common-type";
import { useNotification } from "@/providers/Notification";

interface User {
  id: string;
  email: string;
}

interface LoginSchema {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

type AuthContextType = {
  user: User | null;
  token: string | null;
  //   register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const { openNotification } = useNotification();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
    }
    setIsReady(true);
  }, []);

  const login = async () => {
    return useMutation({
      mutationFn: (body: LoginSchema) =>
        httpClient
          .post<BaseHttpResponse<LoginResponse>>("/auth/login", body)
          .then((res) => res.data),
      mutationKey: ["auth-login"],
      onSuccess: (response) => {
        if (response.results) {
          localStorage.setItem("token", response.results.token);
          setToken(response.results.token);
          setUser(response.results.user);
          openNotification({
            placement: "topRight",
            message: response.message,
            title: "Success",
            type: "success",
          });
          navigate("/");
        }
      },
    });
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
