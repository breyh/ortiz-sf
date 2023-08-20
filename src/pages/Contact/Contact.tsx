import React, { useEffect, useState } from 'react';
import { Grid, Typography, Theme, Box, Button, Tooltip, CircularProgress } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Colors } from '../../theme/colors';
import { StyledInput } from '../../components/common/Input/StyledInput';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            background: 'linear-gradient(90deg, rgba(205,255,216,1) 30%, rgba(148,185,255,1) 60%)',
        },
        title: {
            color: Colors.redWine
        },
        contactContainer: {
            padding: 30,
        },
        contactForm: {
            display: 'flex',
            rowGap: 10,
            padding: 30,
            backgroundColor: "#f4f8fd",

        },
        infoContainer: {
            display: 'flex',
            rowGap: 10,
            padding: 30
        },
        unstyledLink: {
            textDecoration: 'none',
            color: 'black'
        }
    }),
);

export interface IContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [contactForm, setContactForm] = useState<IContactForm>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();

    useEffect(() => {
        const submittedFalse = setTimeout(() => {
            setSubmitted(false);
        }, 4000);

        return () => {
            clearTimeout(submittedFalse)
        }
    }, [submitted])

    const handleSubmitForm = async () => {
        setIsLoading(true);
        try {
            await axios.post('https://formspree.io/f/mzblrzay', contactForm);
            setSubmitted(true);
            setContactForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            console.error(`Error: ${error.message}`);
        }
    };

    return (
        <Grid container className={classes.root}>
            <Grid item xs={0.5} />
            <Grid item xs={4.5} className={classes.infoContainer} style={{ flexDirection: 'column' }}>
                <Typography variant="h2" className={classes.title}>
                    Have Questions?
                </Typography>
                <Typography variant="h6">
                    Please feel free to call or email us, or use our contact form to get in touch with us.
                </Typography>
                <Typography variant="h6">
                    We look forward to hearing from you!
                </Typography>
                <Tooltip title="Click in the number will call us." placement='right-end'>
                    <Typography variant="h5" className={classes.title}>Phone Number</Typography>
                </Tooltip>
                <Link to="tel:475-280-7545" className={classes.unstyledLink} target="_blank">475-280-7545</Link>
                <Tooltip title="Click in the email to contact us." placement='right-end'>
                    <Typography variant="h5" className={classes.title}>E-mail us</Typography>
                </Tooltip>
                <Link to="mailto:ortizsprayfoam@gmail.com" className={classes.unstyledLink} target="_blank">Ortizsprayfoam@gmail.com</Link>
                <Typography variant="h5" className={classes.title}>
                    Our address
                </Typography>
                <Typography variant="body1">
                    PO. BOX 3023 Danbury, CT 06813
                </Typography>
                <Tooltip title="Follow us on instagram and facebook." placement='right-end'>
                    <Typography variant="h5" className={classes.title}>Follow us on IG/FB</Typography>
                </Tooltip>
                <Link to="https://www.instagram.com/ortizsprayfoam/" target="_blank" className={classes.unstyledLink}>@ortizsprayfoam</Link>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={6} className={classes.contactContainer}>
                <Box
                    style={{
                        flexDirection: 'column',
                        width: '80%'
                    }}
                    className={classes.contactForm}
                >
                    <Typography variant="h3" className={classes.title}>
                        Contact
                    </Typography>
                    <StyledInput
                        id="outlined-controlled"
                        label="Name"
                        type="text"
                        required
                        variant='filled'
                        value={contactForm.name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setContactForm({ ...contactForm, name: event.target.value });
                        }}
                    />
                    <StyledInput
                        id="outlined-controlled"
                        label="Email"
                        type='email'
                        required
                        variant='filled'
                        value={contactForm.email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setContactForm({ ...contactForm, email: event.target.value });
                        }}
                    />
                    <StyledInput
                        id="outlined-controlled"
                        label="Subject"
                        required
                        type="text"
                        variant='filled'
                        value={contactForm.subject}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setContactForm({ ...contactForm, subject: event.target.value });
                        }}
                    />
                    <StyledInput
                        id="outlined-controlled"
                        label="Your message"
                        required
                        type="text"
                        value={contactForm.message}
                        variant='filled'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setContactForm({ ...contactForm, message: event.target.value });
                        }}
                        multiline
                        rows={5}
                    />
                    <Button variant="contained" onClick={handleSubmitForm}>
                        {!submitted ? 'Send Message' : 'Submitted'} {isLoading ? <CircularProgress size={20} sx={{color: 'black', ml: 3}} /> : null}
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contact