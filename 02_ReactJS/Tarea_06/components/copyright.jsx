import React from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayTxt' align='center'>
            {'copyright © '} {' '} {new Date().getFullYear()} {' – '}
            <Link color="inherit" href="http://sergiolecuona.es/">
                sergio lecuona
            </Link> 
        </Typography>
    );
}

export default Copyright;
