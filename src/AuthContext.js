import React, { useState, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = props => {
    const [auth, setAuth] = useState(localStorage.getItem("token")?true:false)
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}