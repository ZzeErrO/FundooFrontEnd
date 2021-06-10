import React, { Component } from 'react'

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


export default class UpdateNote extends Component {
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

      static getDerivedStateFromProps(props, state){
        return {Title : props.oneNote.title, Note : props.oneNote.message}
      }



  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }





    validation = () => {

        console.log(this.state.Title)
        let isError = false;
        const errors = this.state;
        errors.TitleError = this.state.Title === this.props.oneNote.title ? true : false;
        errors.NoteError = this.state.Note === this.props.oneNote.message ? true : false;
        this.setState({
    
          ...errors
        })
        return isError = (this.state.Title !== this.props.oneNote.title && this.state.Note !== this.props.oneNote.message) ? true : false
      }
    
      handleChange2 = () => {
    
        var isValidated = this.validation();
        console.log(this.state.Title);
        console.log(this.state.Note);
    
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
            this.props.handleClose();
            this.props.getNoteMethod();
            this.setState({Title : '', Note : ''})
    
          }).catch((err) => {
            console.log(err);
          })
    
        }
    
        if(!isValidated){
          console.log("Not successful validation");
          this.props.handleClose();
        }
    
      }




    render() {
        return (
            <div>

                <Dialog onClose={this.props.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open} >

                    <div className="InDialog">
                        
                        <input className="inputupdate" defaultValue={this.state.Title} type="text" name="title" onChange={e => this.handleChangeTitle(e)} />

                        <textarea className="textupdate" defaultValue={this.state.Note} name="content" onChange={e => this.handleChangeNote(e)} />

                        <div className="Icons">

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

                    </div>

                </Dialog>

            </div>
        )
    }
}
