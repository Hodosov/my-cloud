import { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from 'react-redux'
import { login } from "../actions/user";

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 16,
    margin: "90px auto 0",
    maxWidth: 300,
    border: "1px solid #eee",
    borderRadius: 20,
  },

  field: {
    marginBottom: "12px",
  },
}));

export const LoginForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  return (
    <Grid container alignItems="center" className={classes.wrapper}>
      <Typography>Авторизация</Typography>
      <Grid item xs={12}>
        <TextField
          className={classes.field}
          fullWidth
          label="login"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.field}
          fullWidth
          label="password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => dispatch(login(email, password))}
        >
          Войти
        </Button>
      </Grid>
    </Grid>
  );
};
