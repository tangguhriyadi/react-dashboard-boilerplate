import { Flex } from "antd";
import React, { FormEvent, useCallback, useState } from "react";
import { useAuth } from "@/providers/Auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useAuth();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      login.mutate({
        email: email,
        password: password,
      });
    },
    [email, password]
  );
  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setEmail(e.target.value)} value={email} />
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">submit</button>
      </form>
    </Flex>
  );
};

export default LoginPage;
