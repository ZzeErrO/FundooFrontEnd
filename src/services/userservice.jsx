import Axios from './axiosservice'

const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

class Userservice {

    Registration = (data) => {
        console.log(`${baseUrl}user/userSignUp`, data);
        return axiosservice.postMethod(`${baseUrl}user/userSignUp`, data)
    }

    Login = (data) => {
        console.log(`${baseUrl}user/login`, data);
        return axiosservice.postMethod(`${baseUrl}user/login`, data)
    }
}

export default Userservice
