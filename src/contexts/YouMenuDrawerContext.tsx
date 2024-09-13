// DrawerContext.js
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DrawerContextType {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType>({
    isDrawerOpen: false,
    toggleDrawer: () => { },
});

export const useDrawer = () => useContext(DrawerContext);

interface DrawerProviderProps {
    children: ReactNode;
}

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};
