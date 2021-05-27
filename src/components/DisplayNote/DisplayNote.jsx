import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import IconsDisplayNote from '../Icons/IconsDisplayNote';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const axios_service = new Userservice();

var mymap = new Map();
var array = new Array();
var array2 = new Array();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 250,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const [AreIconsOpen, setAreIconsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeBackground = (x) => {
    setAreIconsOpen(true);

  };

  const changeBackground2 = (x) => {
    setAreIconsOpen(false);

  };

  const handleChangeTitle = (e) => {
    console.log(e.target.value);
    setTitle( e.target.title )
  }

  const handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState( e.target.message )
  }

  const Update = (e) => {
    setOpen(false);
    let data = {
      "title": setTitle(e.target.title),
        "message": setMessage(e.tartget.message)
    }
    axios_service.Update(data).then((result) => {
      console.log(result);
      this.setState({ redirect: "/dashBoard" });

    }).catch((ex) => {
      console.log(ex)
    })

  };

  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.slice(0).reverse().map((value) =>

            <Grid key={value.noteId} item>
              {AreIconsOpen ?

                <Paper className={classes.paper} className="paper"
                  onMouseLeave={changeBackground2} onClick={handleClickOpen}>

                  <div className="title"> <h3>{value.title}</h3></div>
                  <div className="message">{value.message}</div>

                  <IconsDisplayNote oneNote={value} />

                  <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"><h3>{value.title}</h3></DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <div className="message">{value.message}</div>
                      </DialogContentText>
                      <form>

                        <div className="titlepin">
                          <input type="text" placeholder="Title" name="title" onChange={handleChangeTitle} />
                          <textarea name="content" placeholder="Take a note ......" onChange={handleChangeNote} />
                        </div>

                      </form>
                    </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                      </Button>
                        <Button onClick={Update(value)} color="primary">
                          Update
                      </Button>
                      </DialogActions>
                  </Dialog>
                </Paper>

                :

                <Paper className={classes.paper}
                    onMouseEnter={changeBackground}>

                    <div className="title"> <h3>{value.title}</h3></div>
                    <div className="message">{value.message}</div>

                  </Paper>

              }
            </Grid>

          )}
        </Grid>
      </Grid>

    </div>
  );
}