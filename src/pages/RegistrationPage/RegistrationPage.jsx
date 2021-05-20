import React from  'react';
import { Redirect } from "react-router-dom";
import './RegistrationPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo4 from '../../assets/fundoo4.svg';
import fundoo2 from '../../assets/fundoo2.jpg';
import fundoo3 from '../../assets/fundoo3.jpg';
import Userservice from '../../services/userservice';


import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

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
            FirstNameError:false,
            LastNameError:false,
            EmailError: false,
            PasswordError: false, 
            ConfirmPasswordError:false,
            redirect: null,
            open: false
          }
          this.inputref = React.createRef()
      }

      componentDidMount(){
        document.title = `Registration`;
        console.log(this.inputref)
    this.inputref.current.focus()
      }

      TransitionLeft(props) {
        return <Slide {...props} direction="left" />;
      }

      handleClose = () => {
        this.setState({ open: false });
      };
    

      signinpage = () => {

        this.setState({ redirect: "/login"});
      }

      validation = () =>{
        let isError =false;
        const errors = this.state;
        errors.FirstNameError= this.state.FirstName === '' ? true : false;
        errors.LastNameError= this.state.LastName === '' ? true : false;
        errors.EmailError= this.state.Email === '' ? true : false;
        errors.PasswordError= this.state.Password === '' ? true : false;
        errors.ConfirmPasswordPError= this.state.ConfirmPassword === '' ? true : false;
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
            "password": this.state.Password
          };

          axios_service.Registration(data).then((result) => {
              console.log(result);
              if(result.data.success)
              {  console.log("***********************success*******************")
                //this.props.userdata_update(result.data.data)
                /*localStorage.setItem('user_details', result.data.data);
                this.setState({ open: true });*/
                setTimeout(() => this.setState({ redirect: "/login" }), 4000)
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

        return <div className="content">
          
          <div className = 'formbody'>
          
            <div className= "formleft">

              <div className = "fundoo">
              <h3 id = "f">F</h3>
              <h3 id = "u">U</h3>
              <h3 id = "n">N</h3>
              <h3 id = "d">D</h3>
              <h3 id = "o">O</h3>
              <h3 id = "x">O</h3>
              </div>

              <div className = "signin">Create Your Fundoo Account</div>

              <div className = "space"></div>

              <div className="names2">
                <TextField
                inputRef={this.inputref}
                error = {this.state.FirstNameError}
                label = "First Name"
                type = "text"
                name = "First Name"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangeFirstName(e)}
                helperText = {this.state.FirstNameError ? "First Name" : ''}
                />

                <TextField
                error = {this.state.LastNameError}
                label = "Last Name"
                type = "text"
                name = "Last Name"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangeLastName(e)}
                helperText = {this.state.LastNameError ? "Last Name" : ''}
                />
              </div>

              <div className = "space"></div>

              <TextField
              error = {this.state.EmailError}
              label = "Email"
              type = "Email"
              name = "Email"
              variant = "outlined"
              size = "small"
              onChange = {e => this.handleChangeEmail(e)}
              helperText = {this.state.EmailError ? "Enter Email Address" : ''}
              />

              You can use letters, numbers & periods

              <div className = "space"></div>

              <div className= "names2">
                <TextField
                error = {this.state.PasswordError}
                label = "Password"
                type = "Password"
                name = "Password"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangePassword(e)}
                helperText = {this.state.PasswordError ? "Enter Password" : ''}
                />   

                <TextField
                error = {this.state.ConfirmPasswordError}
                label = "Confirm"
                type = "Password"
                name = "Password"
                variant = "outlined"
                size = "small"
                onChange = {e => this.handleChangeConfirmPassword(e)}
                helperText = {this.state.ConfirmPasswordError ? "Confirm Password" : ''}
                />            
              </div>
              
                Use 8 or more characters with a mix of letters, numbers & symbols

                <div className = "space"></div>

              <div className= "buttons">

                <a onClick = {this.signinpage}> Sign In Instead </a>
                <div className = "spacewidth3"></div>
                <Button variant="contained" color="primary" onClick = {this.Next}>  Next </Button>

                <Snackbar
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={this.transition}
                autoHideDuration={6000}
                message="Loggeed in successfully.."
                key={this.transition ? this.transition.name : ''}
                />

              </div>

            </div>

            <div className = "formright">

              <img id= "image" src = {fundoo4} alt = "fundooAccount" />
                One account. All of Fundoo working for you.

            </div>

          </div>
          
        </div>
        
        
    }
}
