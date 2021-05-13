import React from  'react';
import './RegistrationPage.css';
import Button from '@material-ui/core/Button';

export default class registrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: "Create Fundoo Account"};
      }

      handleChange = (e) => {

        console.log(e.target.value);
        this.setState({email: e.target.value})
      }

    render(){
        return <div class="content">
          <header></header>
          <div class = 'body'>
          <div class = "left"></div>
          <div class= "form">
          <div class= "info">
          <img src = "./assets/fundoo.jpg" alt= "fundoo"/>
            <div><h2>Create Your Fundoo Account</h2></div>
           
            <div class="names">
            <input class = 'input' type='text' placeholder="First Name" onChange={this.handleChange}/>
            <input class = 'input' type='text' placeholder="Last Name" onChange={this.handleChange}/>
            </div>
            <div class = "space"></div>
            <input class = 'input2' type='text' placeholder="Email Address" onChange={this.handleChange}/>
            <div class = "space"></div>
            <div class= "names">
            <input class = 'input' type='text' placeholder="Password" onChange={this.handleChange}/>
            <input class = 'input' type='text' placeholder="Confirm Password" onChange={this.handleChange}/>
            </div>
            <div class = "space"></div>
            <div class= "inside">
            <a href = "../pages/LoginPage/LoginPage.jsx">Sign In</a>
            <Button variant="contained" color="primary">  Create Account </Button>
            </div>
            <div class = "space"></div>
            </div>
            <img src = "./assets/fundoo2.jpg" alt = "fundooCreate" />
            
          </div>
          <div class = "right"></div>
              </div>
        <footer>Language:English</footer>
        </div>
    }
}
