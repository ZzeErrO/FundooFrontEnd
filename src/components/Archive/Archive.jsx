import React, { Component } from 'react'

import Userservice from '../../services/userservice.jsx';

import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import IconsDisplayNote from '../Icons/IconsDisplayNote.jsx';

const axios_service = new Userservice();

export default class Archive extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    getArchiveNotes = () => {
        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            }
        }
        axios_service.ArchiveNote(token).then((result) => {

            console.log(result.data);

            this.setState({ ArchiveNotes: result.data });

        }).catch((err) => {
            console.log(err);
        })

    }
    
    changeBackground = (x) => {
        this.setState({AreIconsOpen: true});
    
      };
    
      changeBackground2 = (x) => {
        this.setState({AreIconsOpen: false});
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


                                        {this.state.AreIconsOpen 
                                        
                                            ?

                                            <IconsDisplayNote oneNote={value} getNoteMethod={this.getArchiveNotes}/>

                                            :

                                            <div onMouseEnter={this.changeBackground} className="BlankSpace"></div>

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
