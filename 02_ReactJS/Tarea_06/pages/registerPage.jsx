import React from 'react';
import { Link } from 'react-router-dom';

import RegisterFormik from '../components/pure/forms/registerFormik.jsx';


const RegisterPage = () => {
    return (
        <div>
            {/* <h1>Register</h1> */}
            <RegisterFormik />
            <div>
                <p>Allready have an account?</p>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};


export default RegisterPage;
