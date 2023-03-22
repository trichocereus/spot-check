import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './styles';
import pin from '../../images/pin.png'

const Nav = () => {
    const classes = useStyles();

    return(
    <AppBar className={classes.appBar} position='static' color ='inherit'>
    <Typography className={classes.heading} variant='h4' align='center'>Spot Check</Typography>
    <img className={classes.image} src={pin} alt='pin' height='35' />
    </AppBar>
    );
};

export default Nav