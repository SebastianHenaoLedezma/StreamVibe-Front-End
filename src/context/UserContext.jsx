import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [globalUser, setGlobalUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('authUserData');
        if (storedUser) {
            setGlobalUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <UserContext.Provider value={{ globalUser, setGlobalUser }}>
            {children}
        </UserContext.Provider>
    );
};
