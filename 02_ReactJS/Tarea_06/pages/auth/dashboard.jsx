import React from 'react';
import Button from '@mui/material/Button';

import Copyright from '../../components/pure/copyright';
import { redirect } from 'react-router-dom';

const Dashboard = () => {

    function logout() {
        localStorage.removeItem('credentials');
        redirect('./login');
        console.log('logout');
    }

    return (
        <div>
            <Button variant="contained" onClick={() => logout()} >Logout</Button>
            <Copyright></Copyright>
        </div>
    );
};

export default Dashboard;