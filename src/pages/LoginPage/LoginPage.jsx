import React from  'react';
import './LoginPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo from '../../assets/fundoo.jpg';

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
        console.log(this.state.Email);
        console.log(this.state.Password);
        if(isValidated){
          alert("validation successful");
        }
        if(!isValidated)
        {
          alert("validation unsuccessful");
        }
      }

      change = (e) =>{

        console.log(e.target.value);
        this.setState({Email: e.target.value});
      }

      handleChange = (e) => {

        console.log(e.target.value);
        this.setState({Password: e.target.value});
      }

    render(){
        return <div class="content">
          <div class="header">
            
          </div>
        <div class = 'body'>
          <div class = "left"></div>
          <div>
            <div class = "extra">
            <div class = "fundoo">
            <h3 id = "f">F</h3>
            <h3 id = "u">U</h3>
            <h3 id = "n">N</h3>
            <h3 id = "d">D</h3>
            <h3 id = "o">O</h3>
            <h3 id = "x">O</h3>
            </div>
              <div class = "signin">Sign In</div>
                  <div class = "data">Use Your Fundoo Account</div>
            
            <div class = "textinput">
            <div class = "space"></div>
            <TextField
              error = {this.state.EError}
              label = "Enter Email"
              type = "Email"
              name = "Email"
              variant = "outlined"
              onChange = {e => this.change(e)}
              helperText = {this.state.EError ? "Enter Email Address" : ''}
              />
              <div class = "space"></div>
              <a href= "www.react.com">Forgot Email? </a>
              <div class = "space"></div>
              <TextField
              error = {this.state.PError}
              label = "Enter Password"
              type = "Password"
              name = "Password"
              variant = "outlined"
              onChange = {e => this.handleChange(e)}
              helperText = {this.state.PError ? "Enter Password" : ''}
              />
              <div class = "space"></div>
            <a href= "www.react.com">Forgot Password? </a>
            <div class = "space"></div>
            </div>
            <div>
            <p>
            Not your computer? Use a private browsing window to sign in. <a href = "www.google.com">Learn more</a>
            </p>
            </div>
            <div class= "inside">
            <a href = "../pages/RegistrationPage/RegistrationPage.jsx">Create Account</a>
            <div class = "spacewidth"></div>
            <Button variant="contained" color= "primary" onClick = {this.Next}>  Sign In </Button>
            </div>
            </div>
          </div>
          <div class = "right"></div>
        </div>
        <footer></footer>
        </div>
    }
}
