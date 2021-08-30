import React from 'react';
import {
  Link,
  Paper,
  Box,
  Grid,
  Fab,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './components/LoginForm';
import QuoteCarousel from './components/Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(assets/images/login-img.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgba(208, 211, 213, 0.251)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  side: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  margin: {
    margin: theme.spacing(1),
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center'
  },
  signup: {
    fontSize: 13,
  },
  facebook: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(85, 110, 230)',
    '&:hover': {
      backgroundColor: 'rgba(85, 110, 230, 0.8)',
    }
  },
  twitter: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(80, 165, 241)',
    '&:hover': {
      backgroundColor: 'rgba(80, 165, 241, 0.8)',
    }
  },
  google: {
    margin: theme.spacing(1),
    backgroundColor: 'rgba(244, 106, 106)',
    '&:hover': {
      backgroundColor: 'rgba(244, 106, 106, 0.8)',
    }
  },
}));

function SocialLogin() {
  const classes = useStyles();
  return (
    <>
      <Typography 
        variant="body2" 
        align="center">
        Sign in with
      </Typography>
      <div className={classes.socialLinks}>
        <Fab size="small" aria-label="facebook" className={classes.facebook}>
          <img src={ "assets/icons/facebook.svg" } alt="facebook"/>
        </Fab>
        <Fab size="small" aria-label="twitter" className={classes.twitter}>
          <img src={ "assets/icons/twitter.svg" } alt="twitter"/>
        </Fab>
        <Fab size="small" aria-label="google" className={classes.google}>
          <img src={ "assets/icons/google.svg" } alt="google"/>
        </Fab>
      </div>
    </>
  );
}

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={9} className={classes.image}>
        <QuoteCarousel />
      </Grid>
      <Grid item xs={12} sm={8} md={3} component={Paper} square className={classes.side}>
        <div className={classes.paper}>
          <Typography component="h5" variant="h4" color="primary">
            Welcome Back !
          </Typography>
          <Typography component="h6" variant="body2" color="textSecondary">
            Sign in to continue to Skote.
          </Typography>
          <LoginForm />
          <Box mt={1}>
            <SocialLogin />
          </Box>
          <Box align="center" mt={5} color="textPrimary" className={classes.signup}>
            Don't have an account ? {" "}
            <Link href="#" variant="body2">
              {"Signup now"}
            </Link>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}