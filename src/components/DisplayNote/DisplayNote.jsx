import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const axios_service = new Userservice();

var mymap = new Map();
var array = new Array();
var array2 = new Array();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 150,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const [Title, setTitle] = React.useState("sfbqrggerrbebebefbere");
  const [Message, setMessage] = React.useState();
  const [Reminder, setReminder] = React.useState();
  const [Color, setColor] = React.useState();
  const [Image, setImage] = React.useState();
  const [Collaborator, setCollaborator] = React.useState();
  const [IsPin, setIsPin] = React.useState(false);
  const [IsArchive, setIsArchive] = React.useState(false);
  const [IsTrash, setIsTrash] = React.useState(false);

  const classes = useStyles();

  const handleState = () => {
    
    axios_service.DisplayNote().then((result) => {
        console.log(result);
        for (let index = 0; index < result.data.length; index++) {

            mymap.set(index, JSON.parse('result.data[index]'));
            array2.push(index);
        }
    
    for (let [key,value] of mymap) {
        array[key] = value;

    }
    
    console.log(array[0].title);

    }).catch((err) => {
        console.log(err);
    })

    setTitle("aisefbihb");
    /*setMessage(array[0].message);
    setReminder(array[0].reminder);
    setColor(array[0].color);
    setImage(array[0].image);
    setCollaborator(array[0].collaborator);
    setIsPin(array[0].isPin);
    setIsArchive(array[0].isArchive);
    setIsTrash(array[0].isTrash);*/
   
  };

  return (
      <div>
      
        <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0,1,2].map((value) => (

            <Grid key={value} item>

                <Paper className={classes.paper}>

                {Title}
                {Message}
                {Reminder}
                {Color}
                {Image}
                {Collaborator}
                {IsPin}
                {IsArchive}
                {IsTrash}

                </Paper>
                
            </Grid>

          ))}
        </Grid>
    </Grid>
        <button onClick = {handleState}> Click me </button>
    </div>
  );
}