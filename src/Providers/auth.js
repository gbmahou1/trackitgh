import { useState } from "react";
import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) =>{

    const [user, setUser] = useState({name: '', password: ''});

    const [serverResponse, setServerResponse] = useState({id: '', name: '', image: '', email: '', password: '', token: ''});

    return(
    <AuthContext.Provider value={{user, setUser, serverResponse, setServerResponse}}>
        {props.children}
    </AuthContext.Provider>

    );
}