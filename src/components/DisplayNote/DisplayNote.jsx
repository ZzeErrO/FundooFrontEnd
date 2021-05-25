import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import IconsDisplayNote from '../Icons/IconsDisplayNote';

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
    width: 250,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const [AreIconsOpen, setAreIconsOpen] = React.useState(false);

  const classes = useStyles();

  const changeBackground = (x) => {
    setAreIconsOpen(true);
   
};

  const changeBackground2 = (x) => {
    setAreIconsOpen(false);
   
};

  return (
    <div>

      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={spacing}>
          {props.getnotes.slice(0).reverse().map((value) =>

            <Grid key={value.noteId} item>
              { AreIconsOpen ?
              
              <Paper className={classes.paper} className = "paper"
              onMouseLeave={changeBackground2}>

                <div className = "title"> <h3>{value.title}</h3></div>
                <div className = "message">{value.message}</div>

                <IconsDisplayNote oneNote = {value}/>

              </Paper>

              :

              <Paper className={classes.paper}
              onMouseEnter={changeBackground}>

                <div className = "title"> <h3>{value.title}</h3></div>
                <div className = "message">{value.message}</div>
              
              </Paper>  

              }
            </Grid>

          )}
        </Grid>
      </Grid>
    
    </div>
  );
}