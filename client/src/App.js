import AppBar from "../src/components/Header/AppBar";
import { RegistrationForm } from "./components/RegistrationForm";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginForm } from "./components/LoginForm copy";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./actions/user";

const useStyles = makeStyles(() => ({
  wrapper: {
    overflow: "hidden",
  },
}));

function App() {
  const classes = useStyles();

  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <AppBar />
      </div>
      {!isAuth && (
        <Switch>
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
