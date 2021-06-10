import React, { Component } from 'react'
import './IconsCreateNote.css'

import Icons from './Icons.jsx';

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

export default class IconsCreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Note: '',
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

  static getDerivedStateFromProps(props, state){
    return {Title : props.title, Note : props.message}
  }

  validation = () => {
    let isError = false;
    const errors = this.state;
    errors.TitleError = this.state.Title === '' ? true : false;
    errors.NoteError = this.state.Note === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (this.state.Title !== '' && this.state.Note !== '') ? true : false
  }

  handleChange2 = () => {

    var isValidated = this.validation();
    console.log(this.state.Title);
    console.log(this.state.Note);
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
        this.props.getNoteMethod();
        this.props.reset();

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

                <Icons/>

                <ListItem button onClick={e => this.handleChange2()}>
                  Close
                </ListItem>

            </div>
        )
    }
}
