import React, { Component } from 'react'

import Userservice from '../../services/userservice.jsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const axios_service = new Userservice();

export default class Trash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spacing: 2,
            TrashNotes: [],
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
        this.getTrashNotes();
    }

    getTrashNotes = () => {
        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('id')}`
            }
        }
        axios_service.TrashNote(token).then((result) => {

            console.log(result.data);

            this.setState({ TrashNotes: result.data });

        }).catch((err) => {
            console.log(err);
        })

    }

    Delete = (id) => {

        console.log()

    }

    changeBackground = (x) => {
        this.setState({ AreIconsOpen: true });

    };

    changeBackground2 = (x) => {
        this.setState({ AreIconsOpen: false });
    };

    render() {
        return (
            <div>

                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={this.state.spacing}>
                        {this.state.TrashNotes.map((value, index) =>

                            <Grid key={value.noteId} item>

                                <Paper className="Paper5" className="paper">

                                    <div>
                                        <div className="TitleMessage">

                                            <div className="title"> <h3>{value.title}</h3></div>
                                            <div className="message">{value.message}</div>

                                        </div>


                                        {this.state.AreIconsOpen

                                            ?

                                            <List className="Icons" onMouseLeave={this.changeBackground2}>
                                                <ListItem button onClick={this.Delete(value.noteId)} key="Archive">

                                                    <ListItemIcon> <DeleteForeverOutlinedIcon /></ListItemIcon>
                                                
                                                </ListItem>
                                            </List>

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
