import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import Icons from '../Icons/Icons.jsx';

import UpdateNote from '../UpdateNote/UpdateNote.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


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
  const [IsTrash, setIsTrash] = React.useState({});
  const [allNote, setAllNote] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    GetNotes();
  }, [])

  const GetNotes = () => {
    const token = {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('id')}`
      }
  }
    axios_service.DisplayNote(token).then((result) => {

      console.log(result.data);
      Promise.resolve(setAllNote(result.data.map((obj)=> ( obj = { ...obj, icons: false } ))));

    }).catch((err) => {
      console.log(err);
    })
  }

  const handleClickOpen = (value) => {
    console.log(value)
    setNote(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    console.log(allNote)
  }, [])


const handleChangeTrash = (id) => {
    console.log({IsTrash})
    setIsTrash( true )
    let data = {
      "noteId": id
    }
    axios_service.MakeTrash(data).then((result) => {
      console.log(result);
      GetNotes();

    }).catch((ex) => {
      console.log(ex)
    })
  
}

const changeBackground = (index) => {
  let newArray = [...allNote]

         newArray[index] = {...newArray[index], icons : true}

         setAllNote(newArray);

};

const changeBackground2 = (index) => {
  let newArray = [...allNote]

         newArray[index] = {...newArray[index], icons : false}

         setAllNote(newArray);
};


  return (
    <div>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {allNote.map((value, index) =>

            <Grid key={value.noteId} item>

              <Paper className={classes.paper} className="paper" style={{ backgroundColor: `${value.color}` }}>

                <div>
                  <div className="TitleMessage" onClick={() => handleClickOpen(value)}>
                    <div className="title"> <h3>{value.title}</h3></div>
                    <div className="message">{value.message}</div>
                  </div>

                  {/* <IconsDisplayNote oneNote={value} getNoteMethod={props.getNoteMethod}/> */}

                  {value.icons ?

                    <List className="Icons2" onMouseLeave={() =>changeBackground2(index)}>

                      <div className="Items2">
                      <Icons oneNote={value} getNoteMethod={GetNotes}/>
                      </div>

                      <div className="Items3">
                        <ListItem button onClick={() => handleChangeTrash(value.noteId)} key="Bin">
                          <ListItemIcon>{<DeleteOutlinedIcon />}</ListItemIcon>
                        </ListItem>
                      </div>

                    </List>

                    :

                    <div onMouseEnter={() =>changeBackground(index)} className="BlankSpace"></div>

                  }

                </div>

              </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>

      <UpdateNote oneNote={note} open={open} handleClose={handleClose} getNoteMethod={GetNotes} />

    </div>
  );
}