import React, { createContext, useContext, useMemo } from "react";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

type NotificationContextProps = {
    children: React.ReactNode;
};

type NotificationPlacement = NotificationArgsProps["placement"];

type OpenNotificationType = {
    placement: NotificationPlacement;
    message: string;
    type: "info" | "success" | "error";
    title: string;
};

interface NotificationContextType {
    openNotification: (option: OpenNotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
    undefined
);

export const NotificationProvider: React.FC<NotificationContextProps> = ({
    children,
}) => {
    const openNotification = (config: OpenNotificationType) => {
        switch (config.type) {
            case "info":
                notification.info({
                    message: config.title,
                    description: config.message,
                    placement: config.placement,
                });
                break;
            case "success":
                notification.success({
                    message: config.title,
                    description: config.message,
                    placement: config.placement,
                });
                break;
            case "error":
                notification.error({
                    message: config.title,
                    description: config.message,
                    placement: config.placement,
                });
                break;
            default:
                break;
        }
    };

    const value = useMemo(
        () => ({
            openNotification,
        }),
        []
    );

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

//eslint-disable-next-line
export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error(
            "useNotification must be used within a NotificationProvider"
        );
    }
    return context;
};
