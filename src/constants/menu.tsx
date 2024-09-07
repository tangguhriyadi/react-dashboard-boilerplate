import { DashboardOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import { ModuleKey } from "./access-control";
import { ROUTES } from "./routes";
import React from "react";

interface IMenu {
  key: ModuleKey;
  label: string;
  route: string;
  icon: React.ReactNode;
  children?: IMenu;
}

export const MENUS: IMenu[] = [
  {
    key: ModuleKey.Dashboard,
    label: "Dashboard",
    route: ROUTES.DASHBOARD.BASE,
    icon: <DashboardOutlined />,
  },
  {
    key: ModuleKey.Budget,
    label: "Budget",
    route: ROUTES.BUDGET.BASE,
    icon: <MoneyCollectOutlined />,
  },
];
