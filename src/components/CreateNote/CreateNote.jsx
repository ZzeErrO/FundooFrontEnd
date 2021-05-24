import React from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo4 from '../../assets/fundoo4.svg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';

import './CreateNote.css';
import IconsCreateNote from '../Icons/IconsCreateNote.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';

import Userservice from '../../services/userservice';
const axios_service = new Userservice();

export default class registrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
      toOpenNote: false
    }
  }

  handleChange = () => {
    this.setState({ toOpenNote: true });
  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  handleChangeClose = () => {
    this.setState({ toOpenNote: false });
  }

  render() {

    return (
      <>
        {this.state.toOpenNote ?

          <div className="NoteBody">
            
            <form>
              
              <div className = "titlepin">
              <input type="text" placeholder="Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>
              

              <ListItem button onChange={e => this.handleChangePin()} key="Pin">

                  <ListItemIcon>{<FiberPinOutlinedIcon />}</ListItemIcon>

              </ListItem>

              </div>
              
              <textarea name="content" placeholder="Take a note ......" onChange = {e => this.handleChangeNote(e)}/>

              <List className="IconsCreate">

              <IconsCreateNote title = {this.state.Title} message = {this.state.Note} pin ={this.state.IsPin} isOpen = {this.handleChangeClose} />

              </List>

            </form>

            

          </div>

          :

          <div className="NoteBody">
            <form>
              <input type="text" placeholder="Take a note...." name="title" onClick={e => this.handleChange()} />
            </form>

          </div>

        }
      </>
    )



  }

}