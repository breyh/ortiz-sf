import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../header/Header';

const Layout = () => {
    return (
        <Grid container>
            <Grid item xs={12} style={{
                height: '10vh',
                background: 'linear-gradient(90deg, rgba(205,255,216,1) 30%, rgba(148,185,255,1) 60%)',
            }}>
                <Header />
            </Grid>
            <Grid item xs={12} style={{
                height: '90vh',
                paddingTop: 15,
            }} >
                <Outlet />
            </Grid>
        </Grid>
    )
};
export default Layout;
