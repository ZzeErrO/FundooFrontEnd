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


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Userservice from '../../services/userservice';
const axios_service = new Userservice();

export default class IconsDisplayNote extends Component {
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
      AreIconsOpen: false
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

  changeBackground = (x) => {
    this.setState({AreIconsOpen: true});

  };

  changeBackground2 = (x) => {
    this.setState({AreIconsOpen: false});
  };

  
  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
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
        "noteId": this.props.oneNote.noteId,
        "title": this.state.Title,
        "message": this.state.Note,
        "reminder": this.state.Reminder,
        "color": this.state.Color,
        "image": this.state.Image,
        "collaborator": this.state.Collaborator,
        "isPin": this.state.IsPin,
        "isArchive": this.state.IsArchive,
        "isTrash": this.state.IsTrash
      };

      console.log("validation successful");
      axios_service.Update(data).then((result) => {
        console.log(result);

      }).catch((err) => {
        console.log(err);
      })

    }

    if(!isValidated){
      alert("Not successful validation");
    }

  }
















    
    render() {
        return (
          
            <div>

                <Dialog onClose={this.props.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
                
                <div className = "InDialog">
                
                <input type="text" placeholder= "Change Title" name="title"  onChange = {e => this.handleChangeTitle(e)}/>
              
                <textarea name="content" placeholder="Update Note message" onChange = {e => this.handleChangeNote(e)}/>
                
                <button onClick = {this.handleChange2} >Update</button>

                </div>

                </Dialog>

                {this.state.AreIconsOpen ?

              <List className= "Icons" onMouseLeave = {this.changeBackground2}>

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

              :

                <div onMouseEnter = {this.changeBackground} className= "BlankSpace"></div>

              }

            </div>
            
        )
    }
}
