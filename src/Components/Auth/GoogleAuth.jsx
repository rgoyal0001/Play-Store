import React, {useState, useEffect} from 'react';
import { GoogleLogin } from 'react-google-login';

export const GoogleAuth=()=>{
    const responseGoogle = (response) => {
        console.log('user action response',response);
      }
    return (
        <GoogleLogin
            clientId="228064531674-5nmpe2umtt5fhp7mdljtb45u7om89kdh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}