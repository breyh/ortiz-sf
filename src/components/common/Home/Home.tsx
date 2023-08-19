import React from 'react';
import { sprayFoamOne, sprayFoamThree, sprayFoamTwo } from '../../../assets';
import ImageSlider from '../Image/ImageSlider';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Box,
    Theme,
    Tooltip
} from '@mui/material';
import { sprayFoamVideo } from '../../../assets/video';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        links: {
            textDecoration: 'none',
            color: '#1e5044'
        }
    }),
);

const Home = () => {
    const classes = useStyles();
    return (
        <Grid container style={{
            display: 'flex',
            rowGap: 10,
        }}>
            <Grid item xs={12} style={{
                maxHeight: 450,
                display: 'flex',
                gap: 10,
                rowGap: 10,
                justifyContent: 'center',
            }}>
                <Grid item xs={12} md={6} style={{
                    padding: 10
                }}>
                    <ImageSlider images={[sprayFoamOne, sprayFoamTwo, sprayFoamThree]} />
                </Grid>
                <Grid item xs={12} md={6} style={{
                    padding: 10
                }}>
                    <Card>
                        <CardMedia
                            style={{ height: 255, width: '100%' }}
                            component="video"
                            autoPlay
                            loop
                            muted
                            src={sprayFoamVideo}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Welcome to
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                Ortiz Spray Foam Insulation, LLC.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Contact us</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{
                padding: 10,
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '1px solid #cf2d2d',
                        borderRadius: 3
                    }}
                    style={{
                        padding: 5
                    }}
                >
                    <Tooltip title="Click in the number will call us." placement='right-end'>
                        <Typography variant="h6">Call Us</Typography>
                    </Tooltip>
                    <Link to="tel:475-280-7545" className={classes.links}>475-280-7545</Link>
                    <Tooltip title="Click in the email to contact us." placement='right-end'>
                        <Typography variant="h6">E-mail us</Typography>
                    </Tooltip>
                    <Link to="mailto:ortizsprayfoam@gmail.com" className={classes.links} >Ortizsprayfoam@gmail.com</Link>
                    <Tooltip title="Follow us on instagram and facebook." placement='right-end'>
                        <Typography variant="h6">Follow us on IG/FB</Typography>
                    </Tooltip>
                    <Link to="https://www.instagram.com/ortizsprayfoam/" className={classes.links}>@ortizsprayfoam</Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Home