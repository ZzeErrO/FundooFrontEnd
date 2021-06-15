import React, { Component } from 'react'

import Userservice from '../../services/userservice.jsx';

import './Archive.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Icons from '../Icons/Icons.jsx';

const axios_service = new Userservice();

export default class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            spacing: 2,
            ArchiveNotes: [],
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


    componentDidMount() {
        this.getArchiveNotes();
    }

    GetNotes = () => {
        let token = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('id')}`
          }
      }
        axios_service.DisplayNote(token).then((result) => {

          console.log(result.data);
          Promise.resolve(this.setState({ notes : result.data.map((obj)=> ( obj = { ...obj, icons: false } )) }));

        }).catch((err) => {
          console.log(err);
        })
      }

    getArchiveNotes = () => {
        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            }
        }
        axios_service.ArchiveNote(token).then((result) => {

            console.log(result.data);

            this.setState({ ArchiveNotes: result.data.map((obj)=> ( obj = { ...obj, icons: false } )) });

        }).catch((err) => {
            console.log(err);
        })

    }

    handleChangeTrash = (id) => {

        let data = {
          "noteId": id
        }
        axios_service.MakeTrash(data).then((result) => {
          console.log(result);
          this.getArchiveNotes();
  
        }).catch((ex) => {
          console.log(ex)
        })
      
    }
    

    changeBackground = (index) => {
        let newArray = [...this.state. ArchiveNotes]

         newArray[index] = {...newArray[index], icons : true}

         this.setState({ ArchiveNotes: newArray});

    };

    changeBackground2 = (index) => {
        let newArray = [...this.state. ArchiveNotes]

         newArray[index] = {...newArray[index], icons : false}

         this.setState({ ArchiveNotes: newArray});
    };

    render() {
        return (
            <div>

                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={this.state.spacing}>
                        {this.state.ArchiveNotes.map((value, index) =>

                            <Grid key={value.noteId} item>

                                <Paper className="Paper5" className="paper">

                                    <div>
                                        <div className="TitleMessage">

                                            <div className="title"> <h3>{value.title}</h3></div>
                                            <div className="message">{value.message}</div>

                                        </div>


                                        {value.icons

                                            ?

                                            <div className = "Archive2" onMouseLeave={() => this.changeBackground2(index)}>
                                                <div className="Items2">
                                                    <Icons oneNote={value} getNoteMethod={this.GetNotes} />
                                                </div>

                                                <div className="Items3">
                                                    <ListItem button onClick={() => this.handleChangeTrash(value.noteId)} key="Bin">
                                                        <ListItemIcon>{<DeleteOutlinedIcon />}</ListItemIcon>
                                                    </ListItem>
                                                </div>
                                            </div>

                                            :

                                            <div onMouseEnter={() => this.changeBackground(index)} className="BlankSpace"></div>

                                        }

                                    </div>

                                </Paper>

                            </Grid>

                        )}
                    </Grid>
                </Grid>

            </div>
        )
    }
}
