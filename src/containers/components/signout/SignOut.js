import React from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from '../../authentication/sign-in';

const SignOut = () => {
    

    return(
        <div>
            <button onClick ={Redirect(() => SignIn)}>Sign Out</button>
        </div>
    )
}

export default SignOut;