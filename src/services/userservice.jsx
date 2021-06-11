import Axios from './axiosservice'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44362/api/'

const confignote = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('id')}`
    }
}

class Userservice {

    Registration = (data) => {
        console.log(`${baseUrl}User/Register`, data);
        return axiosservice.postMethod(`${baseUrl}User/Register`, data, false)
    }

    Login = (data) => {
        console.log(`${baseUrl}User/Login`, data, false);
        return axiosservice.postMethod(`${baseUrl}User/Login`, data, false)
    }

    AddNote = (data) => {
        console.log(`${baseUrl}Notes`, data, confignote);
        console.log(localStorage.getItem('id'))
        return axiosservice.postMethod(`${baseUrl}Notes`, data, confignote)
    }

    DisplayNote = (token) => {
        console.log(`${baseUrl}Notes`, token);
        return axiosservice.getMethod(`${baseUrl}Notes`, token)
    }

    TrashNote = (token) => {
        console.log(`${baseUrl}Notes/Trash`, token);
        return axiosservice.getMethod(`${baseUrl}Notes/Trash`, token)
    }

    ArchiveNote = (token) => {
        console.log(`${baseUrl}Notes/Archive`, token);
        return axiosservice.getMethod(`${baseUrl}Notes/Archive`, token)
    }

    MakeArchive = (data) => {
        console.log(`${baseUrl}Notes/${data.noteId}/Archive`, confignote);
        return axiosservice.putMethod(`${baseUrl}Notes/${data.noteId}/Archive`, data, confignote)
    }

    MakeTrash = (data) => {
        console.log(`${baseUrl}Notes/${data.noteId}/Trash`, confignote);
        return axiosservice.deleteMethod(`${baseUrl}Notes/${data.noteId}/Trash`, confignote)
    }

    Update = (data) => {
        console.log(`${baseUrl}Notes/${data.noteId}`, data, confignote);
        return axiosservice.putMethod(`${baseUrl}Notes/${data.noteId}`, data, confignote)
    }

    DeleteForever = (data) => {
        console.log(`${baseUrl}Notes/${data}`, confignote);
        return axiosservice.deleteMethod(`${baseUrl}Notes/${data}`, confignote)
    }

}

export default Userservice
