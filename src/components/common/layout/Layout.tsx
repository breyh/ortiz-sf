import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../header/Header';

const Layout = () => {
    return (
        <Grid container>
            <Grid item xs={12} style={{
                height: '10vh',
            }}>
                <Header />
            </Grid>
            <Grid item xs={12} style={{
                height: '90vh',
            }} >
                <Outlet />
            </Grid>
        </Grid>
    )
};
export default Layout;
