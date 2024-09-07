import React, { useMemo } from "react";
import { SidebarProvider } from "@/providers/Sidebar";
import { Button, Flex, Layout, Menu, MenuProps } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useAuth } from "@/providers/Auth";
import { MENUS } from "@/constants/menu";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
    <SidebarProvider>
      <Layout.Sider style={{ background: "white" }}>
        <Flex style={{ height: "10vh" }} justify="center" align="center">
          logo
        </Flex>
        <Menu
          items={items}
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKey]}
          style={{ height: "80vh" }}
        />
        <Flex style={{ height: "10vh" }} justify="center">
          <Button
            icon={<LogoutOutlined />}
            onClick={() => logout()}
            iconPosition="end"
          >
            Logout
          </Button>
        </Flex>
      </Layout.Sider>
    </SidebarProvider>
  );
};

export default Sidebar;
