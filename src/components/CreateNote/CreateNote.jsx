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
import FiberPinOutlinedIcon from '@material-ui/icons/FiberPinOutlined';


const axios_service = new Userservice();

export default class registrationPage extends React.Component {
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
      toOpenNote: false,
      TitleError: false,
      NoteError: false
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
    return isError = (errors.Title !== '' && errors.Note !== '') ? true : false
  }

  handleChange = () => {
    this.setState({ toOpenNote: true });
  }

  handleChange2 = () => {

    var isValidated = this.validation();
    console.log(this.state.Title);
    console.log(this.state.Note);

    if (isValidated) {
      this.setState({ toOpenNote: false });
      let data = {
        "title": this.state.Title,
        "message": this.state.Note,
        "reminder": this.state.Reminder,
        "color": null,
        "image": null,
        "collaborator": null,
        "isPin": false,
        "isArchive": false,
        "isTrash": false
      };

      console.log("validation successful");
      axios_service.AddNote(data).then((result) => {
        console.log(result);

      }).catch((err) => {
        console.log(err);
      })

    }

    if(!isValidated){
      this.setState({ toOpenNote: false });
    }

  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({ Title: e.target.value })
  }

  handleChangeNote = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  handleChangeReminder = () => {

  }

  handleChangeCollaborator = (e) => {
    console.log(e.target.value);
    this.setState({ Note: e.target.value })
  }

  handleChangeArchive = () => {

    if (this.state.IsArchive) {
      this.setState({ isArchive: false })
    }
    else{
      this.setState({ isArchive: true })
    }
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

              <List className="Icons">

                <ListItem button onChange={e => this.handleChangeReminder(e)} key="Index">
                  <ListItemIcon>{<NotificationsNoneOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onChange={e => this.handleChangeCollaborator(e)} key="Reminder">
                  <ListItemIcon>{<PersonAddOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onChange={e => this.handleChangeImage(e)} key="Edit Label">
                  <ListItemIcon>{<ImageOutlinedIcon />}</ListItemIcon>
                </ListItem>

                <ListItem button onClick={e => this.handleChangeArchive()} key="Archive">
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