import React from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Icons from '../Icons/Icons.jsx';

import './CreateNote.css';

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
      axios_service.AddNote(data).then((result) => {
        this.handleChangeClose();
        console.log(result);
        this.props.getNoteMethod();
        this.resetState();

      }).catch((err) => {
        console.log(err);
      })

    }

    if(!isValidated){
      this.handleChangeClose();
      this.setState({ toOpenNote: false });
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

  resetState = () => {
    this.setState({Title : '', Note : ''})
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

              {/* <IconsCreateNote reset = {this.resetState} getNoteMethod = {this.props.getNoteMethod} title = {this.state.Title} message = {this.state.Note} pin ={this.state.IsPin} isOpen = {this.handleChangeClose} /> */}

              <div className = "Icons">

                <Icons/>

                <ListItem button onClick={e => this.handleChange2()}>
                  Close
                </ListItem>

            </div>

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