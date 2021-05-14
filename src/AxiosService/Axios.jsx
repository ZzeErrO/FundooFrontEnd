import React, {Component} from 'react'
import axios from 'axios'

export class Axios extends Component {

    constructor(props) {

        super(props)
        this.state = {


        }
    }

    componentDidMount(){

        // post(baseurl, data, header)
        axios.post('https://jsonplaceholder.typicode.com/users/')
        .then((result)=>{
            console.log(result.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h3>Axios</h3>
            </div>
        )
    }
}

export default Axios