import React, { Component } from 'react'
import './DisplayNote.css';
import Userservice from '../../services/userservice';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const axios_service = new Userservice();

export default class DisplayNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            Title: '',
            Note: '',
            Reminder: '',
            Color: '',
            Iimage: '',
            Collaborator: '',
            IsPin: false,
            IsArchive: false,
            IsTrash: false,
            toOpenNote: false,
            TitleError: false,
            NoteError: false
        }
    }

    Get = () => {

        axios_service.DisplayNote().then((result) => {
            console.log(result);
        }).catch(() => {
            console.log();
        })
    }


    render() {
        return (
        <>
            {
                this.state.Title !== ''
                ?
                <div className="Paper">
                <Paper elevation={0} />
                </div>
                :

                <></>
            }
        </>
        )
    }
}
