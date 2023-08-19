import { Grid, Theme, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles';
import React from 'react'
import { Link } from 'react-router-dom';
import { logoWithOutBg } from '../../../assets';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '10px 20px'
        },
        links: {
            textDecoration: 'none',
            color: 'black'
        }
    }),
);

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={6} style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center'
            }}>
                <img src={logoWithOutBg} alt="logo-img" style={{
                    width: 60,
                    maxWidth: 100,
                }} />
                <Typography variant="h3" style={{ color: '#cf2d2d' }}>Ortiz Spray Foam Insulation, LLC.</Typography>
            </Grid>
            <Grid item xs={6} style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 20,
                alignItems: 'center'
            }}>
                <Link to="Home" className={classes.links}>Home</Link>
                <Link to="Home" className={classes.links}>Contact</Link>
                <Link to="Home" className={classes.links}>About</Link>
            </Grid>
        </Grid>
    )
}

export default Header;