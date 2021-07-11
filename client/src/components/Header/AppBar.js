import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 8,
  },
  title: {
    flexGrow: 1,
    color: "#000",
  },
  toolbar: {
    background: "#F47F73",
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton}>
            <CloudQueueIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My-cloud
          </Typography>
          <Button>Auth</Button>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
