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
    width: 250,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const [notes, setNote] = React.useState([]);

  const classes = useStyles();

  React.useEffect(() => {
    axios_service.DisplayNote().then((result) => {
      console.log(result.data);
      setNote(result.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="start" spacing={spacing}>
          {notes.slice(0).reverse().map((value) =>

            <Grid key={value} item>

              <Paper className={classes.paper}>

                <div className = "title"> <h3>{value.title}</h3></div>
                <div className = "message">{value.message}</div>
              
              </Paper>

            </Grid>

          )}
        </Grid>
      </Grid>
     
    </div>
  );
}