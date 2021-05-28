import axios from 'axios'

class Axios {

    postMethod = (url, data, isHeaderRequired) =>{
        return axios.post(url, data, isHeaderRequired)
    }

    getMethod = (url, isHeaderRequired) => {
        return axios.get(url, isHeaderRequired)
    }

    putMethod = (url, data, isHeaderRequired) => {
        return axios.put(url, data, isHeaderRequired)
    }

    deleteMethod = (url, isHeaderRequired) => {
        return axios.delete(url, isHeaderRequired)
    }

}

export default Axios