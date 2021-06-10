import React, { Component } from 'react'


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';

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
      this.setState({ Collaborator: e.target.value })
    }
  
    handleChangeColor = () => {
  
    }
    
    handleChangeArchive = () => {
  
        console.log(this.state.IsArchive)
        this.setState({ IsArchive: true })
    }

    render() {
        return (
            <>
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
            </>
        )
    }
}
