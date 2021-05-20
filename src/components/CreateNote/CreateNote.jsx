import React from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo4 from '../../assets/fundoo4.svg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';
import Userservice from '../../services/userservice';
import './CreateNote.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';


const axios_service = new Userservice();

export default class registrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
      toOpenNote: false,
    }
  }

  handleChange = () => {
    this.setState({ toOpenNote: true });
  }

  handleChange2 = () => {
    this.setState({ toOpenNote: false });
  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  render() {

    return (
      <>
        {this.state.toOpenNote ?

          <div className="NoteBody">
            
            <form>
              <input type="text" placeholder="Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>

              <textarea name="content" placeholder="Take a note ......" onChange = {e => this.handleChangeNote(e)}/>

              <List className="Icons">
                <ListItem button key="Index">
                  <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>

                </ListItem>
                <ListItem button key="Reminder">
                  <ListItemIcon>{<PersonAddOutlinedIcon />}</ListItemIcon>

                </ListItem>
                <ListItem button key="Edit Label">
                  <ListItemIcon>{<ImageOutlinedIcon />}</ListItemIcon>

                </ListItem>
                <ListItem button key="Archive">
                  <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>

                </ListItem>
                <ListItem button onClick={e => this.handleChange2()}>
                  Close
                </ListItem>
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