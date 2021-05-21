import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const axios_service = new Userservice();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const [Title, setTitle] = React.useState();
  const [Message, setMessage] = React.useState();
  const [Reminder, setReminder] = React.useState();
  const [Color, setColor] = React.useState();
  const [Image, setImage] = React.useState();
  const [Collaborator, setCollaborator] = React.useState();
  const [IsPin, setIsPin] = React.useState();
  const [IsArchive, setIsArchive] = React.useState();
  const [IsTrash, setIsTrash] = React.useState(2);

  const classes = useStyles();

  return (

      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      
  );
}