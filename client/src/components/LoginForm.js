import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 16,
    margin: "90px auto 0",
    maxWidth: 300,
    border: "1px solid #eee",
    borderRadius: 20
  },

  field: {
    marginBottom: "12px",
  },
}));

export const LoginForm = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.wrapper}>
      <Grid item xs={12}>
        <TextField
          className={classes.field}
          fullWidth
          label="login"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={classes.field}
          fullWidth
          label="password"
          variant="outlined"
          type="password"
        />
      </Grid>
      <Grid xs={12}>
        <Button fullWidth variant="outlined">
          Войти
        </Button>
      </Grid>
    </Grid>
  );
};
