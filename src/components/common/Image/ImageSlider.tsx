/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Paper, Box } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { IExtendedTheme } from '../../../theme/ExtendedThemeOptions';

const useStyles = makeStyles((theme: IExtendedTheme) =>
    createStyles({
        dot: {
            width: 10,
            height: 10,
            backgroundColor: '#ccc',
            borderRadius: '50%',
            margin: '0 5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          },
    }),
);

const ImageSlider = (props: any) => {
    const classes = useStyles();
    const { images } = props;
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Auto-play every 6 seconds

        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={6} sm={12} md={12}>
                <Card>
                    <CardMedia
                        component="img"
                        alt="Slider Image"
                        height="350"
                        image={images[currentIndex]}
                    />
                    <CardContent>
                        <Paper elevation={0}>
                            <Grid container justifyContent="center">
                                {images.map((_: any, index: number) => (
                                    <Box key={index}>
                                        <div
                                            className={`${classes.dot} ${index === currentIndex ? 'active' : ''}`}
                                            onClick={() => handleDotClick(index)}
                                            style={{
                                                backgroundColor: index === currentIndex ?'#007bff' : '#ccc'
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Grid>
                        </Paper>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ImageSlider;
