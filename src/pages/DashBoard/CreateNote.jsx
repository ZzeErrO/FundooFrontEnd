import React from  'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo4 from '../../assets/fundoo4.svg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';
import Userservice from '../../services/userservice';
import './CreateNote.css';

const axios_service = new Userservice();

export default class registrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          }
      }

      render(){
        return <div className = "NoteBody">
            Note
            </div>
      }

    }