import React from 'react';
import { NavLink } from 'react-router-dom';

import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return <Home />;
        case 'TASKS':
            return <Home />;
        case 'SETTINGS':
            return <Settings />;
        default:
            return <Home />;
    }
}



const Navbar = ({ list }) => {

    function drawListitem(title, path, icon, index) {
        return (
            <ListItem key={index} >
                <NavLink to={path} >
                    <ListItemText primary={title} />
                </NavLink>
            </ListItem>
        )
    }

    return (
        <nav>
            <List>
                {list.map(({ title, path, icon, isPrivate }, index) => {
                    if (isPrivate) {
                        if (localStorage.getItem('credentials') !== null) {
                            return (drawListitem( title, path, icon, index ))
                        }
                    } else {
                        return (drawListitem( title, path, icon, index ))
                    }
                    return null;
                })}
            </List>
        </nav>
    );
}

export default Navbar;
