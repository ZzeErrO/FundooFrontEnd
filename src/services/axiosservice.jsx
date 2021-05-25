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

    deleteMethod = (url, isHeaderRequired) => {
        return axios.delete(url, isHeaderRequired)
    }

}

export default Axios