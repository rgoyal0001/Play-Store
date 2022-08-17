import React, {useState, useEffect, useContext} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '.';
import jwt_decode from 'jwt-decode'

export const GoogleOauth=()=>{
    const {user,setUser} = useContext(AuthContext)
    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log('sdn',credentialResponse)
                const {credential}=credentialResponse
                const decode_user=jwt_decode(credential)
                const {name,email,picture}=decode_user
                setUser({name,email,picture});
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap={true}
        />
    )
}