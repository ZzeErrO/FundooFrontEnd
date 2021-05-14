import Axios from './axiosservice'

const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'

class Userservice {

    Registration = (data) => {
        console.log(`${baseUrl}user/userSignUp`, data);
        return axiosservice.postMethod(`${baseUrl}user/userSignUp`, data)
    }
}

export default Userservice
