import React from 'react';
import { Link } from 'react-router-dom';

import LoginFormik from '../components/pure/forms/loginFormik.jsx';


const LoginPage = () => {

    return (
        <div>
            {/* <h1>Login</h1> */}
            <LoginFormik />
            <div>
                <p> Don't have an account? </p>
                <Link to="/register" > Register </Link>
            </div>
            
        </div>
    );
}



export default LoginPage;
