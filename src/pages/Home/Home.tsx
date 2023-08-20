import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Theme,
    darken,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@mui/styles';
import { sprayFoamOne, sprayFoamTwo, sprayFoamThree, cozyEnvironment } from '../../assets';
import ImageSlider from '../../components/common/Image/ImageSlider';
import { Colors } from '../../theme/colors';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        links: {
            textDecoration: 'none',
            color: '#1e5044',
            width: 'fit-content'
        },
        simulateButton: {
            border: `1px solid ${darken(Colors.ligthGray, 0.5)}`,
            padding: 10,
            borderRadius: 10,
            '&:hover': {
                backgroundColor: darken(Colors.ligthGray, 0.2),
                color: 'white'
            },
        },
        centeredContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }),
);

const features = [
    'High-quality insulation materials',
    'Expert installation services',
    'Energy-efficient solutions',
    'Customized insulation solutions for different spaces',
    'Effective insulation to maintain a comfortable temperature'
]

const benefits = [
    'Increased energy efficiency, resulting in lower heating and cooling costs',
    'Improved comfort levels by maintaining consistent temperatures throughout the space',
    'Reduced noise transmission for a quieter and more peaceful environment',
    'Enhanced indoor air quality by preventing drafts and minimizing the infiltration of dust and allergens',
    'Protection against moisture and condensation, preventing damage to the building structure and potential health hazards'
]

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
                backgroundColor: Colors.ligthGray,
                padding: 20,
            }}>
                <Grid item xs={12} md={8} style={{
                    padding: 30,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                }}>
                    <Typography variant="h1" sx={{ fontSize: 58 }}>
                        Cozy Insulation Solutions: Comfort, Quality, Efficiency
                    </Typography>
                    <Typography variant="body1">
                        Welcome to Ortiz Spray Foam Insulation, LLC., where we specialize in insulating your space to provide unparalleled comfort and warmth throughout any environment.
                    </Typography>
                    <Link
                        to="services"
                        className={`${classes.links} ${classes.simulateButton}`}
                    >
                        View all services
                    </Link>
                </Grid>
                <Grid item md={1} />
                <Grid item xs={12} md={4} style={{
                    padding: 10
                }}>
                    <ImageSlider images={[sprayFoamOne, sprayFoamTwo, sprayFoamThree]} showIndicators={false} />
                </Grid>
            </Grid>
            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <Grid item xs={5} className={classes.centeredContent}>
                    <Divider style={{ width: '98%' }} orientation='horizontal' />
                </Grid>
                <Grid item xs={2} className={classes.centeredContent}>
                    <Typography variant='body1'>
                        Features & Benefits
                    </Typography>
                </Grid>
                <Grid item xs={5} className={classes.centeredContent}>
                    <Divider style={{ width: '98%' }} orientation='horizontal' />
                </Grid>
                <Grid item xs={4} style={{
                    padding: 30,
                }}>
                    <Typography variant="h3" fontWeight={100} sx={{my: 3}}>Features</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        style={{
                            rowGap: 10
                        }}
                    >
                        {features.map((feature) => (
                            <Grid item xs={12} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5
                            }}>
                                <AdjustOutlinedIcon style={{color: '#49a078'}} />
                                <Typography variant="body2"> {feature}</Typography>
                            </Grid>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={4} style={{
                    padding: 30,
                }}>
                    <Typography variant="h3" fontWeight={100} sx={{my: 3}}>Benefits</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        style={{
                            rowGap: 10
                        }}
                    >
                        {benefits.map((benefit) => (
                            <Grid item xs={12} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5
                            }}>
                                <AdjustOutlinedIcon style={{color: '#49a078'}} />
                                <Typography variant="body2"> {benefit}</Typography>
                            </Grid>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={4} style={{
                    padding: 10,
                }}>
                    <img src={cozyEnvironment} alt="cozy-environment" style={{width: '90%', borderRadius: 10}} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home