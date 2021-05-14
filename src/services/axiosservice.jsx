import axios from 'axios'

class Axios {

    postMethod = (url, data, isHeaderRequired = false) =>{
        return axios.post(url, data, isHeaderRequired)
    }
}

export default Axios