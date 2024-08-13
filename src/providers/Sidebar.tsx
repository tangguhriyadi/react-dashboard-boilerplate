import { createContext, useContext, useState } from "react";

// Create Interface
export interface SidebarContext {
    isOpen: boolean;
    setIsOpen: (opened: boolean) => void;
    isHover: boolean;
    setIsHover: (hovered: boolean) => void;
}

interface SidebarProviderProps {
    children: React.ReactNode;
}

// Create Context
export const SidebarContext = createContext<SidebarContext | undefined>(
    undefined
);

// Create Provider
export const SidebarProvider: React.FC<SidebarProviderProps> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <SidebarContext.Provider
            value={{ isOpen, setIsOpen, isHover, setIsHover }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

//eslint-disable-next-line
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }

    return context;
};
