import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import decode from 'jwt-decode';
import useStyles from './styles';
import pin from '../../images/pin.png'

const Nav = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };
    
    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line
    }, [location]);

    return(
    <AppBar className={classes.appBar} position='static' color ='inherit'>
    <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant='h4' align='center'>Spot Check</Typography>
        <img className={classes.image} src={pin} alt='pin' height='35' />
    </div>
    <Toolbar className={classes.toolbar}>
        {user ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                <Button varianet='contained' className={classes.logout} color='secondary' onClick={logout}>Log Out</Button>
            </div>
        ) : (
            <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
        )}
    </Toolbar>
    </AppBar>
    );
};

export default Nav