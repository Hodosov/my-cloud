import AppBar from "../src/components/Header/AppBar";
import { LoginForm } from "./components/LoginForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  wrapper: {
    overflow: "hidden",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar />
      <LoginForm />
    </div>
  );
}

export default App;
