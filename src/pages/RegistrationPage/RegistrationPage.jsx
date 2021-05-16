import React from  'react';
import { Redirect } from "react-router-dom";
import './RegistrationPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo4 from '../../assets/fundoo4.svg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';
import Userservice from '../../services/userservice';

const axios_service = new Userservice();

export default class registrationPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            FirstName:'',
            LastName:'',
            Email: '',
            Password: '',
            ConfirmPassword:'',
            FNError:false,
            LNError:false,
            EError: false,
            PError: false, 
            CPError:false,
            redirect: null
          }
      }

      signinpage = () => {

        this.setState({ redirect: "/login"});
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
        if(!isValidated){
          
          console.log("Account Creation unsuccessful");
        }
        if(isValidated)
        {
          let data = {
            "firstName": this.state.FirstName,
            "lastName": this.state.LastName,
            "email": this.state.Email,
            "service": "advance",
            "password": this.state.Password
          };
          alert("Account Created successful");
          axios_service.Registration(data).then((result) => {
              console.log(result);
              if(result.data.data.success){
                console.log("***********************success*******************")
                //this.props.userdata_update(result.data.data)
                localStorage.setItem('user_details', result.data.data);
                this.setState({redirect: "/Dashboard"});
              }

          })
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
        if(this.state.redirect){

          return <Redirect to= {this.state.redirect} />
        }

        return <div class="content">
          
          <div class = 'formbody'>
          
            <div class= "formleft">

              <div class = "fundoo">
              <h3 id = "f">F</h3>
              <h3 id = "u">U</h3>
              <h3 id = "n">N</h3>
              <h3 id = "d">D</h3>
              <h3 id = "o">O</h3>
              <h3 id = "x">O</h3>
              </div>

              <div class = "signin">Create Your Fundoo Account</div>

              <div class = "space"></div>

              <div class="names">
                <TextField
                error = {this.state.FNError}
                label = "First Name"
                type = "text"
                name = "First Name"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangeFirstName(e)}
                helperText = {this.state.FNError ? "First Name" : ''}
                />

                <TextField
                error = {this.state.LNError}
                label = "Last Name"
                type = "text"
                name = "Last Name"
                variant = "outlined"
                size = "small"
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
              size = "small"
              onChange = {e => this.handleChangeEmail(e)}
              helperText = {this.state.EError ? "Enter Email Address" : ''}
              />

              You can use letters, numbers & periods

              <div class = "space"></div>

              <div class= "names">
                <TextField
                error = {this.state.PError}
                label = "Password"
                type = "Password"
                name = "Password"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangePassword(e)}
                helperText = {this.state.PError ? "Enter Password" : ''}
                />   

                <TextField
                error = {this.state.CPError}
                label = "Confirm"
                type = "Password"
                name = "Password"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangeConfirmPassword(e)}
                helperText = {this.state.CPError ? "Confirm Password" : ''}
                />            
              </div>
              
                Use 8 or more characters with a mix of letters, numbers & symbols

                <div class = "space"></div>

              <div class= "buttons">

                <a onClick = {this.signinpage}> Sign In Instead </a>
                <div class = "spacewidth3"></div>
                <Button variant="contained" color="primary" onClick = {this.Next}>  Next </Button>

              </div>

            </div>

            <div class = "formright">

              <img id= "image" src = {fundoo4} alt = "fundooAccount" />
                One account. All of Fundoo working for you.

            </div>

          </div>
          
        </div>
        
        
    }
}
