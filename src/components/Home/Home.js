import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/Auth-Context";

const Home = (props) => {
  const AuthCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Hi</h1>
      <h2>Welcome back!</h2>
      <Button onClick={AuthCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
