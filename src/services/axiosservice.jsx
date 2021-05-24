import axios from 'axios'

class Axios {

    postMethod = (url, data, isHeaderRequired) =>{
        return axios.post(url, data, isHeaderRequired)
    }

    getMethod = (url, data, isHeaderRequired) => {
        return axios.get(url, data, isHeaderRequired)
    }

    putMethod = (url, data, isHeaderRequired) => {
        return axios.put(url, data, isHeaderRequired)
    }

    deleteMethod = (url, data, isHeaderRequired) => {
        return axios.delete(url, data, isHeaderRequired)
    }

}

export default Axios