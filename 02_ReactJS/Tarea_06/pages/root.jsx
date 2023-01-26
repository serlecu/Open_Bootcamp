import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/pure/navbar';

const Root = () => {

    const navbarList = [
        {
            title: 'HOME',
            path: '/',
            icon: 'HOME',
            isPrivate: false
        },
        {
            title: 'ABOUT',
            path: '/about',
            icon: 'ABOUT',
            isPrivate: false
        },
        {
            title: 'LOGIN',
            path: '/login',
            icon: 'LOGIN',
            isPrivate: false
        },
        {
            title: 'Register',
            path: '/register',
            icon: 'REGISTER',
            isPrivate: false
        },
        {
            title: 'DASHBOARD',
            path: '/dashboard',
            icon: 'DASHBOARD',
            isPrivate: true
        },
        {
            title: 'TASKS',
            path: '/dashboard',
            icon: 'TASKS',
            isPrivate: true
        }
    ];

    return (
        <div>
            <h1>TITLE</h1>
            <Navbar list={navbarList} />
            <Outlet />
        </div>
    );
}

export default Root;
