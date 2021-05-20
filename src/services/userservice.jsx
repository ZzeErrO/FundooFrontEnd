import Axios from './axiosservice'

const axiosservice = new Axios();
const baseUrl = 'https://localhost:44362/api/'

class Userservice {

    Registration = (data) => {
        console.log(`${baseUrl}User/Register`, data);
        return axiosservice.postMethod(`${baseUrl}User/Register`, data)
    }

    Login = (data) => {
        console.log(`${baseUrl}User/Login`, data);
        return axiosservice.postMethod(`${baseUrl}User/Login`, data)
    }
}

export default Userservice
