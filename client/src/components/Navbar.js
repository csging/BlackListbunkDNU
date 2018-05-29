//This file has the Appbar and menu drawer
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import black from '@material-ui/core/colors/black';
// import Todolist from './Todolist2';
// import Calendar from './Calendar';
import Header from './Header.js';
import Hidden from '@material-ui/core/Hidden';
// import Home from './Homepage.js';
// import Landing from './Landing.js';
// import { createMuiTheme } from '@material-ui/core/styles';
// import About from './About';
// import FormGroup from '@material-ui/core/FormGroup';
// import black from '@material-ui/core/colors/black';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './Navbar.css';
// import Tooltip from '@material-ui/core/Tooltip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkbaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as Colors from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator'

const drawerWidth = 125;

// const titleStyles = {
//   title: {
//     cursor: 'pointer'

//   },
//   color:{
//     color: Colors.black,
//     textColor: Colors.white
//   }
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 260,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%', 
    color: Colors.white,
    backgroundColor: Colors.black,
  },
  appBar: {
    // theme: 'darkbaseTheme',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    }, 
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar, 
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
      <div>
        <div className={classes.toolbar} />
        </div>
        <Divider />
        <List><a href="/">Home</a></List>
        <Divider />
        <List><a href="/dashboard">Create New Task</a></List>
        <Divider />
        <List><a href="/lists">Your Lists</a></List>
        <Divider />
        <List><a href="/calendar">Calendar</a></List>
        <Divider />
        <List><a href="/about">About</a></List>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar className="white">
          <Grid container spacing ={12}>
            <Grid item xs={2}>
            <IconButton
              color="white"
              //style={{color: 'white'}}
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            </Grid>
            <Typography variant="display2" color="inherit" noWrap>
            The BLACK List             
            </Typography>
            </Grid>
            <Grid item xs={6}>
              <Header/>
              </Grid>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);