import { Button, Card, Flex, Form, FormProps, Input } from "antd";
import React from "react";
import { useAuth } from "@/providers/Auth";
import CoreInput from "@/ui-library/form/Input";
import { loginRule, LoginSchema } from "@/modules/login/schema/login.schema";

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  const onFinish: FormProps<LoginSchema>["onFinish"] = (values) => {
    login.mutate(values);
  };

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Card title="Login" style={{ minWidth: "500px" }}>
        <Form
          onFinish={onFinish}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item<LoginSchema>
            label="Email"
            name="email"
            rules={[loginRule]}
          >
            <CoreInput disabled={login.isPending} />
          </Form.Item>
          <Form.Item<LoginSchema>
            label="Password"
            name="password"
            rules={[loginRule]}
          >
            <Input.Password disabled={login.isPending} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 18 }}>
            <Button htmlType="submit" type="primary" loading={login.isPending}>
              submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
};

export default LoginPage;
