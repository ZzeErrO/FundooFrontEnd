import React from  'react';
import './RegistrationPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo from '../../assets/fundoo.jpg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';

export default class registrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.state = {
            FirstName:'',
            LastName:'',
            Email: '',
            Password: '',
            ConfirmPassword:'',
            FNError:false,
            LNError:false,
            EError: false,
            PError: false, 
            CPError:false
          }
      }

      validation = () =>{
        let isError =false;
        const errors = this.state;
        errors.FNError= this.state.FirstName === '' ? true : false;
        errors.LNError= this.state.LastName === '' ? true : false;
        errors.EError= this.state.Email === '' ? true : false;
        errors.PError= this.state.Password === '' ? true : false;
        errors.CPError= this.state.ConfirmPassword === '' ? true : false;
        this.setState({

          ...errors
        })
        return isError = (errors.Password === errors.ConfirmPassword && errors.Email !=='' && errors.Password !== '' && errors.FirstName !== '' && errors.LastName !== '' && errors.ConfirmPassword) ? true : false
      }

      Next = () =>{

        var isValidated = this.validation();
        console.log(this.state.Email);
        console.log(this.state.Password);
        if(isValidated){
          alert("Account Created successful");
        }
        if(!isValidated)
        {
          alert("Account Creation unsuccessful");
        }
      }

      handleChangeFirstName = (e) => {

        console.log(e.target.value);
        this.setState({FirstName: e.target.value})
      }

      handleChangeLastName = (e) => {

        console.log(e.target.value);
        this.setState({LastName: e.target.value})
      }

      handleChangeEmail = (e) => {

        console.log(e.target.value);
        this.setState({Email: e.target.value})
      }

      handleChangePassword = (e) => {

        console.log(e.target.value);
        this.setState({Password: e.target.value})
      }

      handleChangeConfirmPassword = (e) => {

        console.log(e.target.value);
        this.setState({ConfirmPassword: e.target.value})
      }

    render(){
        return <div class="content">
          <div class="header"></div>
          <div class = 'body'>
          <div class = "left"></div>
          <div class= "form">
          <div class= "info">
          <img class = "image" src = {fundoo} alt= "fundoo"/>
            <div><h2>Create Your Fundoo Account</h2></div>
           
            <div class="names">
            <TextField
              error = {this.state.FNError}
              label = "First Name"
              type = "text"
              name = "First Name"
              variant = "outlined"
              onChange = {e => this.handleChangeFirstName(e)}
              helperText = {this.state.FNError ? "First Name" : ''}
              />
            <TextField
              error = {this.state.LNError}
              label = "Last Name"
              type = "text"
              name = "Last Name"
              variant = "outlined"
              onChange = {e => this.handleChangeLastName(e)}
              helperText = {this.state.LNError ? "Last Name" : ''}
              />
            </div>
            <div class = "space"></div>
            <TextField
              error = {this.state.EError}
              label = "Email"
              type = "Email"
              name = "Email"
              variant = "outlined"
              onChange = {e => this.handleChangeEmail(e)}
              helperText = {this.state.EError ? "Enter Email Address" : ''}
              />
            <div class = "space"></div>
            <div class= "names">
            <TextField
              error = {this.state.PError}
              label = "Password"
              type = "Password"
              name = "Password"
              variant = "outlined"
              onChange = {e => this.handleChangePassword(e)}
              helperText = {this.state.PError ? "Enter Password" : ''}
              />            
            <TextField
              error = {this.state.CPError}
              label = "Confirm"
              type = "Password"
              name = "Password"
              variant = "outlined"
              onChange = {e => this.handleChangeConfirmPassword(e)}
              helperText = {this.state.CPError ? "Confirm Password" : ''}
              />            </div>
            <div class = "space"></div>
            <div class= "inside">
            <a href = "../pages/LoginPage/LoginPage.jsx">Sign In</a>
            <Button variant="contained" color="primary" onClick = {this.Next}>  Create Account </Button>
            </div>
            <div class = "space"></div>
            </div>
            <img class= "image" src = {fundoo3} alt = "fundooAccount" />
            <img class= "image" src = {fundoo2} alt = "fundooCreate" />
            
          </div>
          <div class = "right"></div>
              </div>
        <footer></footer>
        </div>
    }
}
