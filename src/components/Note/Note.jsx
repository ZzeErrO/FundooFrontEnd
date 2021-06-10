import React, { Component } from 'react'

import CreateNote from '../CreateNote/CreateNote.jsx';
import DisplayNote from '../DisplayNote/DisplayNote.jsx';

import Userservice from '../../services/userservice.jsx';

const axios_service = new Userservice();

export default function Note() {

    const [notes, setNote] = React.useState([]);

    React.useEffect(() => {
        GetNotes();
      }, [])

    const GetNotes = () => {
        const token = {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('id')}`
          }
      }
        axios_service.DisplayNote(token).then((result) => {

          console.log(result.data);
          setNote(result.data);

        }).catch((err) => {
          console.log(err);
        })
      }

    return (
        <>
            <CreateNote getNoteMethod={GetNotes}/>
            <DisplayNote getnotes = {notes} getNoteMethod={GetNotes}/>
        </>
    )
}
