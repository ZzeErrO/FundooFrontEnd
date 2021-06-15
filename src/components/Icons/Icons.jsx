import React, { Component } from 'react'
import './Icons.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';

import Avatar from '@material-ui/core/Avatar';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';

import Userservice from '../../services/userservice';
const axios_service = new Userservice();

export default class Icons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["white", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb", "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8", "#e8eaed"],
      Reminder: new Date(),
      Color: "",
      Image: '',
      Collaborator: '',
      IsPin: false,
      IsArchive: false,
      IsTrash: false,
      TitleError: false,
      NoteError: false,
      toOpenNote: true,
      ShowColor: false
    }
  }

  handleChangeColor = (color) => {
    console.log(color)
    this.setState({ Color: color });
    console.log(this.state.Color);
    let data = {
      "noteId": this.props.oneNote.noteId,
      "color": this.state.Color,
    }
    axios_service.MakeColor(data).then((result) => {
      console.log(result);
      this.props.getNoteMethod();

    }).catch((ex) => {
      console.log(ex)
    })
  }

  handleChangeArchive = () => {
    if (this.props.oneNote.isArchive === false) {
      this.setState({ IsArchive: true })
      let data = {
        "noteId": this.props.oneNote.noteId,
      }
      axios_service.MakeArchive(data).then((result) => {
        console.log(result);
        this.props.getNoteMethod();

      }).catch((ex) => {
        console.log(ex)
      })
    }
    else {
      this.setState({ IsArchive: false })
      let data = {
        "noteId": this.props.oneNote.noteId,
      }
      axios_service.UnArchiveOrUntrash(data).then((result) => {
        console.log(result);
        this.props.getNoteMethod();

      }).catch((ex) => {
        console.log(ex)
      })
    }

  }

  changeColor = () => {
    console.log("true");
    if (this.state.ShowColor) {
      this.setState({ ShowColor: false });
    }else{
    this.setState({ ShowColor: true });
    }
  }

  render() {
    return (
      <>
        <ListItem button key="Index">
          <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
        </ListItem>

        <ListItem button key="Reminder">
          <ListItemIcon>{<PersonAddOutlinedIcon />}</ListItemIcon>
        </ListItem>

        <ListItem button key="Edit Label" className = "ColorsPlusIcons"
          onClick={this.changeColor}
          >
          <ListItemIcon>{<ImageOutlinedIcon />}</ListItemIcon>

        </ListItem>

        <Popover
        className = "ColorIcon"
          open={this.state.ShowColor}
          onClose={this.state.ShowColor}
        >
          <div id="mouse-over-popover">
          {this.state.colors.map(value => (
            <div button onClick = {() => this.handleChangeColor(value)} className="AllColor" style={{ backgroundColor: `${value}` }}>
              
            </div>
          ))}
          </div>

        </Popover>

        <ListItem button onClick={this.handleChangeArchive} key="Archive">
          <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
        </ListItem>
      </>
    )
  }
}
