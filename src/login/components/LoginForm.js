import React from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'inherit',
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Typography component="h6" variant="h5">
        Username
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        size="small"
        fullWidth
        id="username"
        label="Enter username"
        name="username"
        autoComplete="username"
        autoFocus
      />
      <Grid container>
        <Grid item xs>
          <Typography component="h6" variant="h5">
            Password
          </Typography>
        </Grid>
        <Grid item>
          <Link href="#" variant="h5" color="textSecondary">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <TextField
        variant="outlined"
        margin="normal"
        size="small"
        fullWidth
        name="password"
        label="Enter password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={
          <Checkbox value="remember" color="primary" />
        }
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Login
      </Button>
    </form>
  );
}