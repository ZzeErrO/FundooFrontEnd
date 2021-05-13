import React from  'react';
import './LoginPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class LoginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          Email: '',
          Password: '',
          EError: false,
          PError: false 
        }
      }

      validation = () =>{
        let isError =false;
        const errors = this.state;
        errors.EError= this.state.Email === '' ? true : false;
        errors.PError= this.state.Password === '' ? true : false;
        this.setState({

          ...errors
        })
        return isError = (errors.Email !=='' && errors.Password !== '') ? true : false
      }

      Next = () =>{

        var isValidated = this.validation();
        if(isValidated){
          alert("validation successful");
        }
        else
        {
          alert("validation unsuccessful");
        }
      }

      handleChange = (e) => {

        console.log(e.target.value);
        this.Next();
        this.setState({email: e.target.value});
      }

    render(){
        return <div class="content">
          <header></header>
        <div class = 'body'>
          <div class = "left"></div>
          <div>
            <div class = "extra">
            <div><img src = "./assets/fundoo.jpg" alt= "fundoo"/></div>
              <div><h2>Sign In</h2></div>
                  <div>Use Your Fundoo Account</div>
            
            <div>
            <TextField
              error = {this.state.EError}
              label = "Enter Email"
              type = "text"
              name = "Email"
              variant = "outlined"
              onChange = {e => this.handleChange(e)}
              helperTest = {this.state.EError ? "Enter Email Address" : ''}
              />
              <a href= "www.react.com">Forgot Email </a>
              <TextField
              error = {this.state.PError}
              label = "Enter Password"
              type = "password"
              name = "Password"
              variant = "outlined"
              onChange = {e => this.handleChange(e)}
              helperTest = {this.state.EError ? "Enter Password" : ''}
              />
            <a href= "www.react.com">Forgot Password </a>
            </div>
            <div>
            <p>
            Not your computer? Use a private browsing window to sign in. <a href = "www.google.com">Learn more</a>
            </p>
            </div>
            <div class= "inside">
            <a href = "../pages/RegistrationPage/RegistrationPage.jsx">Create Account</a>
            <Button variant="contained" color="primary">  Sign In </Button>
            </div>
            </div>
          </div>
          <div class = "right"></div>
        </div>
        <footer>Language:English</footer>
        </div>
    }
}
