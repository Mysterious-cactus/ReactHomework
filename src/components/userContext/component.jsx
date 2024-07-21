import React, { useCallback, useContext, useState } from "react";

export const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const changeUser = useCallback(() => setUser((prevState) => (prevState === "Daria" ? null : "Daria")), []);
  
    return (
      <UserContext.Provider value={{ value: user, changeUser }}>
        {children}
      </UserContext.Provider>
    );
};