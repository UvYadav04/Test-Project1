'use client'

import React, { createContext, useState, useContext } from "react";

interface MyContextType {
    ham: boolean;
    setham: React.Dispatch<React.SetStateAction<boolean>>;
    selected: number;
    setselected: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context
export const MyContext = createContext<MyContextType | undefined>(undefined);

// Provider Component
export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [ham, setham] = useState(false);
    const [selected, setselected] = useState(2);

    return (
        <MyContext.Provider value={{ ham, setham, selected, setselected }}>
            {children}
        </MyContext.Provider>
    );
};

// Custom Hook for safe context usage
export const useMyContext = (): MyContextType => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyContextProvider");
    }
    return context;
};
