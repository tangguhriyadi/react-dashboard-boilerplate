import React, { useMemo, useState } from "react";
import { Button, Flex, Layout, Menu, MenuProps, Typography } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth } from "@/providers/Auth";
import { MENUS } from "@/constants/menu";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const items = useMemo<MenuProps["items"]>(
    () =>
      MENUS.map((menu) => ({
        key: menu.key,
        icon: menu.icon,
        label: menu.label,
        children: menu.children,
        onClick: () => {
          navigate(menu.route);
        },
      })),
    [MENUS, navigate]
  );

  const defaultSelectedKey = useMemo(() => {
    const path = location.pathname.split("/")[1];

    if (path.length === 0) return "DASHBOARD";

    return path.toUpperCase();
  }, [location]);

  return (
    <Layout.Sider
      style={{ background: "white" }}
      width="18vw"
      collapsible
      collapsed={isCollapsed}
      trigger={null}
    >
      <Flex
        style={{
          height: "100%",
          maxHeight: isCollapsed ? "12vh" : "10vh",
          padding: "10px 20px",
        }}
        justify="space-between"
        align="center"
        vertical={isCollapsed}
      >
        <Typography.Text>Logo</Typography.Text>
        <Button
          type="text"
          icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            fontSize: "16px",
          }}
        />
      </Flex>
      <Menu
        items={items}
        mode="inline"
        defaultSelectedKeys={[defaultSelectedKey]}
        style={{ height: "100%", maxHeight: "80vh", fontSize: "16px" }}
      />
      <Flex style={{ height: "100%", maxHeight: "10vh" }} justify="center">
        <Button
          icon={<LogoutOutlined />}
          onClick={() => logout()}
          iconPosition="end"
        >
          {!isCollapsed && "Logout"}
        </Button>
      </Flex>
    </Layout.Sider>
  );
};

export default Sidebar;
