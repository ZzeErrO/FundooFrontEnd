import React from 'react';
import { Redirect, withRouter, Route, BrowserRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './DashBoard.css';

import Note from '../../components/Note/Note.jsx';
import Trash from '../../components/Trash/Trash.jsx';
import Archive from '../../components/Archive/Archive.jsx';

import FUNDOO from '../../assets/fundoo.png';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import Input from '@material-ui/core/Input';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';


import Userservice from '../../services/userservice';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: "white"
  },
  appBar: {
    background: "white",
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'spaceBetween',

  },

  /*appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },*/

  search: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    border: "1px solid transparent",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f1f3f4",
    height: "50px",
    marginLeft: "100px",
    borderRadius: "8px",
    position: 'relative',
    width: "750px",
    padding: "10px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {

    padding: theme.spacing(3),
  },
}));


const axios_service = new Userservice();

function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [trash, setTrash] = React.useState(false);
  const [archive, setArchive] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toTrash = () => {
    setTrash(true);
  };

  const toNote = () => {
    setTrash(false);
    setArchive(false);
  };

  const toArchive = () => {
    setArchive(true);
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          {open ?

            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerClose}
              edge="start"
              className={clsx(classes.menuButton, {
                //  [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>

            :

            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                //  [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          }

          <img src={FUNDOO} alt="Fundoo" />

          <Typography variant="h6" noWrap>
            <div className="fundoo">
              <h4 id="f">F</h4>
              <h4 id="u">U</h4>
              <h4 id="n">N</h4>
              <h4 id="d">D</h4>
              <h4 id="o">O</h4>
              <h4 id="x">O</h4>
            </div>
          </Typography>

          <div className={classes.search}>

            <SearchIcon class="searchIcon" />

            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
          <div className="IconsDisplay2">
            <RefreshOutlinedIcon />
            <ViewStreamIcon />
            <SettingsOutlinedIcon />
          </div>

          <div className="IconsDisplay3">
            <AppsOutlinedIcon />
          </div>

        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Index" onClick={toNote}>
            <ListItemIcon>{<EmojiObjectsOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Index" />
          </ListItem>
          <ListItem button key="Reminder">
            <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Reminder" />
          </ListItem>
          <ListItem button key="Edit Label">
            <ListItemIcon>{<CreateRoundedIcon />}</ListItemIcon>
            <ListItemText primary="Edit Label" />
          </ListItem>
          <ListItem button key="Archive" onClick={toArchive}>
            <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button key="Bin" onClick={toTrash}>
            <ListItemIcon>{<DeleteOutlinedIcon />}</ListItemIcon>
            <ListItemText primary="Bin" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {trash ?
          <>
            {archive ?

              <BrowserRouter>
                <Route exact path="/archive" component={Archive} />
              </BrowserRouter>

              :

              <BrowserRouter>
                <Route exact path="/dashboard/trash" component={Trash} />
              </BrowserRouter>

            }
          </>
          :
          <>

            {archive ?

              <BrowserRouter>
                <Route exact path="/archive" component={Archive} />
              </BrowserRouter>
              :
              <BrowserRouter>
                <Route exact path="/dashboard" component={Note} />
              </BrowserRouter>

            }
          </>
        }
      </main>
    </div>
  );
}


export default withRouter(MiniDrawer);