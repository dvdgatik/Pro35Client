import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth0 } from "../../react-auth0-spa";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
   <nav className="main-header navbar navbar-expand navbar-white navbar-light fixed-top ">
     {/* Left navbar links */}
     <ul className="navbar-nav">
       <li className="nav-item">
         <a className="nav-link" data-widget="pushmenu" href="fake_url"><i className="fas fa-bars" /></a>
       </li>
       <li className="nav-item d-none d-sm-inline-block">
         <a href="/" className="nav-link">
         <i className="fas fa-home"> </i>
            &nbsp;Inicio</a>
       </li>
     </ul>
     
     {/* Right navbar links */}
     <ul className="navbar-nav ml-auto">
       {/* Notifications Dropdown Menu */}
       <li className="nav-item dropdown">
         <a className="nav-link" data-toggle="dropdown" href="fake_url">
           <i className="fas fa-cogs" />
           {/*<span className="badge badge-warning navbar-badge">15</span>*/}
         </a>
         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
           {/*<span className="dropdown-item dropdown-header">15 Notifications</span>*/}
           <div className="dropdown-divider" />
           <Button color="inherit"> {!isAuthenticated && (
          <div>
        <div onClick={() => loginWithRedirect({})}>Ingresar</div>
        </div>
      )}

      {isAuthenticated && <div onClick={() => logout()}>Salir</div>}</Button>
          {/* <div className="dropdown-divider" />*/}
           
           
           <div className="dropdown-divider" />
           <a href="fake_url" className="dropdown-item dropdown-footer">Ver todas las configuraciones</a>
         </div>
       </li>
       {/*--<li className="nav-item">
         <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="fake_url">
           <i className="fas fa-th-large" />
         </a>
           </li>*/}
     </ul>
     {/*<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <img width="150" src="https://dev-david-gatica.pantheonsite.io/wp-content/uploads/2020/01/logo-blanco-111.png"/>
          </Typography>
          
          <Button color="inherit"> {!isAuthenticated && (
          <div>
        <div onClick={() => loginWithRedirect({})}>Ingresar</div>
        </div>
      )}

      {isAuthenticated && <div onClick={() => logout()}>Salir</div>}</Button>
        </Toolbar>
      </AppBar>
          </div>*/}
   </nav>
   

   
  );
}
