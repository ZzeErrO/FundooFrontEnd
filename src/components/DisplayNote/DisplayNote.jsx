import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import IconsDisplayNote from '../Icons/IconsDisplayNote';
import UpdateNote from '../UpdateNote/UpdateNote.jsx';

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
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [message, setMessage] = React.useState();
  const [note, setNote] = React.useState({});

  const classes = useStyles();

  const handleClickOpen = (index) => {
    setNote(index);
    setOpen(true);
    console.log(note)
  };

  const handleClose = () => {
    setOpen(false);
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
      "title": {title},
        "message": {message}
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
          {props.getnotes.slice(0).reverse().map((value, index) =>

            <Grid key={value.noteId} item>

                <Paper className={classes.paper} className="paper">

                  <div>

                  <div className= "TitleMessage" onClick={() => handleClickOpen(value)}>
                  <div className="title"> <h3>{value.title}</h3></div>
                  <div className="message">{value.message}</div>
                  </div>
                  
                  <IconsDisplayNote oneNote={value}/>

                  </div>

                </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>

      <UpdateNote oneNote = {note} open ={open} handleClose = {handleClose}/>

    </div>
  );
}