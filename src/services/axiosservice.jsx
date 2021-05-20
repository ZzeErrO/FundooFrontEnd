import axios from 'axios'

class Axios {

    postMethod = (url, data, isHeaderRequired = false) =>{
        return axios.post(url, data, isHeaderRequired)
    }

    postMethod2 = (url, data, isHeaderRequired) =>{
        return axios.post(url, data, isHeaderRequired)
    }

    getMethod = (url, data, isHeaderRequired) => {
        return axios.get(url, data, isHeaderRequired)
    }

}

export default Axios