import React, { Component } from 'react'
import './IconsCreateNote.css'

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

export default class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Reminder: new Date(),
      Color: '',
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: false,
      TitleError: false,
      NoteError: false,
      toOpenNote: true
    }
  }

  handleChangeReminder = () => {

  }

  handleChangeCollaborator = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  handleChangeReminder = () => {

  }
  
  handleChangeArchive = () => {

      console.log(this.state.IsArchive)
      this.setState({ IsArchive: true })
  }







  
  validation = () => {
    let isError = false;
    const errors = this.state;
    errors.TitleError = this.props.title === '' ? true : false;
    errors.NoteError = this.props.message === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (this.props.title !== '' && this.props.message !== '') ? true : false
  }

  handleChange2 = () => {

    var isValidated = this.validation();
    console.log(this.props.title);
    console.log(this.props.message);
    console.log(this.state.isArchive);

    if (isValidated) {
      this.setState({ toOpenNote: false });
      let data = {
        "title": this.props.title,
        "message": this.props.message,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.IsPin,
        "isArchive": this.state.IsArchive,
        "isTrash": this.state.IsTrash
      };

      console.log("validation successful");
      axios_service.AddNote(data).then((result) => {
        this.props.isOpen();
        console.log(this.props);
        console.log(result);

      }).catch((err) => {
        console.log(err);
      })

    }

    if(!isValidated){
      this.props.isOpen();
      console.log(this.props);
      this.setState({ toOpenNote: false });
    }

  }








    render() {

        return (
            <div className = "Icons">

                <ListItem button onChange={e => this.handleChangeReminder(e)} key="Index">
                  <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onChange={e => this.handleChangeCollaborator(e)} key="Reminder">
                  <ListItemIcon>{<PersonAddOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onChange={e => this.handleChangeColor(e)} key="Edit Label">
                  <ListItemIcon>{<ImageOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onClick={this.handleChangeArchive} key="Archive">
                  <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onClick={e => this.handleChange2()}>
                  Close
                </ListItem>

            </div>
        )
    }
}
