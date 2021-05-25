import React, { Component } from 'react'
import './IconsDisplayNote.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';


import Userservice from '../../services/userservice';
const axios_service = new Userservice();

export default class IconsDisplayNote extends Component {
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
      NoteError: false
    }
  }

  handleChangeArchive = () => {

      this.setState({ IsArchive: true })
      let data = {
        "noteId": this.props.oneNote.noteId,
      }
      axios_service.MakeArchive(data).then((result) => {
        console.log(result);
        this.setState({ redirect: "/dashBoard" });

      }).catch((ex) => {
        console.log(ex)
      })
    
  }

  handleChangeTrash = () => {
      console.log(this.state.IsTrash)
      this.setState({ IsTrash: true })
      let data = {
        "noteId": this.props.oneNote.noteId
      }
      axios_service.MakeTrash(data).then((result) => {
        console.log(result);
        this.setState({ redirect: "/dashBoard" });

      }).catch((ex) => {
        console.log(ex)
      })
    
  }

    
    render() {
        return (
          


            <div>
                
              <List className= "Icons">

                <div className= "Items">
                <ListItem button onChange={e => this.handleChangeReminder(e)} key="Index">
                  <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
                </ListItem>
                </div>

                <div className= "Items">
                <ListItem button onChange={e => this.handleChangeCollaborator(e)} key="Reminder">
                  <ListItemIcon>{<PersonAddOutlinedIcon />}</ListItemIcon>
                </ListItem>
                </div>

                <div className= "Items">
                <ListItem button onChange={e => this.handleChangeImage(e)} key="Edit Label">
                  <ListItemIcon>{<ImageOutlinedIcon />}</ListItemIcon>
                </ListItem>
                </div>

                <div className= "Items">
                <ListItem button onClick={this.handleChangeArchive} key="Archive">
                  <ListItemIcon>{<ArchiveOutlinedIcon />}</ListItemIcon>
                </ListItem>
                </div>

                <div className= "Items">
                <ListItem button onClick={this.handleChangeTrash} key="Bin">
                <ListItemIcon>{<DeleteOutlinedIcon />}</ListItemIcon>
                </ListItem>
                </div>

              </List>

            </div>
            
        )
    }
}
