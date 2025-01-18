'use client'
import React, { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }: { children: any }) => {
    const [ham, setham] = useState("Hello, Context!");
    const [selected, setselected] = useState(2)
    return (
        <MyContext.Provider value={{ ham, setham, selected, setselected }}>
            {children}
        </MyContext.Provider>
    );
};