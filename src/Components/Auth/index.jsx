import React, {useState, useEffect} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const AuthContext = React.createContext({
    user:null,
    setUser:()=>{}
})
export default AuthContext;


export  function AuthProvider({children}){

    const [user,setUser]=React.useState(null)
    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            <GoogleOAuthProvider clientId='228064531674-5nmpe2umtt5fhp7mdljtb45u7om89kdh.apps.googleusercontent.com'>
                {children}
            </GoogleOAuthProvider>
        </AuthContext.Provider>
    )

}
    