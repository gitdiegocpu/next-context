"use client";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider ({ children }) {

    useEffect(() =>{
        if (!user) {
            const _user = sessionStorage.getItem ("user");
            if((_user) {
                setUser(JSON.parse(_user));

            })
        }
    }, []);

    const _setUser = (data) => {
        if (data) { //login 
        sessionStorage.setItem("user"), JSON.stringify(data)(data)
    } else { //log out
     sessionStorage.removeItem("user");
    }
    setUser(data)
    }

    const [user, setUser] = useState(null);




    return(
              <AuthContext.Provider value={{user, setUser}}>
              {children}
              </AuthContext.Provider>
  
    )
}