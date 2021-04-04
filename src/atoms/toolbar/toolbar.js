import React, { useContext, useState } from 'react';
import user_context from "../../state_manage/user_context";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';

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
    fontSize: '15pt',
  },
  email: {
    marginLeft: '1%'
  },
  icon: {
    height: '30px',
    width: '30px'
  }
}));

const ToolBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const context = useContext(user_context);
  const [anchorEl, setAnchorEl] = useState(null);
  const { firstName, lastName, email } = context.user;

  const logOut = () => { // Typically would use promise based library Axios.
    window.setTimeout(() => {
      context.updateEmail("")
      context.updateFirstName("")
      context.updateLastName("")
      history.push("/")
    }, 2000)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.user}>
            {firstName !== "" ? <>Welcome, {firstName}!</> : <>Welcome to the dashboard!</>}
          </Typography>
          <div>
            <PersonIcon onClick={handleClick} className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>{lastName}, {firstName}</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={() => logOut()}>Logout</MenuItem>
            </Menu>
          </div>
          <Typography className={classes.email}>
            {email}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolBar;
