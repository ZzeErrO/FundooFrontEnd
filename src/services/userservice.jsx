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
        return axiosservice.postMethod(`${baseUrl}Notes`, data, confignote)
    }

    DisplayNote = () => {
        console.log(`${baseUrl}Notes`, confignote);
        return axiosservice.getMethod(`${baseUrl}Notes`, confignote)
    }

    MakeArchive = (data) => {
        console.log(`${baseUrl}Notes`, confignote);
        return axiosservice.putMethod(`${baseUrl}Notes`, data, confignote)
    }

    MakeTrash = (data) => {
        console.log(`${baseUrl}Notes`, confignote);
        return axiosservice.deleteMethod(`${baseUrl}Notes`, data, confignote)
    }

}

export default Userservice
