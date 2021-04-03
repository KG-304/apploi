import React, { useContext, useState } from 'react';
import user_context from "../../state_manage/user_context";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  user: {
    flexGrow: 1,
    fontSize: '15pt'
  }
}));

const ToolBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const context = useContext(user_context);
  const { email } = context.user;
  const { firstName } = context.user;
  const { lastName } = context.user;

  const logOut = () => {
    window.setTimeout(() => {
      context.updateEmail("")
      context.updateFirstName("")
      context.updateLastName("")
      history.push("/")
    }, 3000)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.user}>
            {firstName !== "" ? <>Welcome, {firstName}!</> : <>Welcome to the dashboard!</>}
          </Typography>
          <Button onClick={() => logOut()} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolBar;
