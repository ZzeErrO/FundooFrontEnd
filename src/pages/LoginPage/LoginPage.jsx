import React from 'react';
import { Redirect } from "react-router-dom";
import './LoginPage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fundoo from '../../assets/fundoo.jpg';
import Userservice from '../../services/userservice';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { makeStyles } from '@material-ui/core/styles';

const axios_service = new Userservice();

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Email: '',
      Password: '',
      EmailError: false,
      PasswordError: false,
      redirect: null,
      open: false
    }
    this.inputref = React.createRef()
  }

  componentDidMount() {
    console.log(this.inputref)
    console.log(this.inputref.current.focus())
    this.inputref.current.focus()
  }

  TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  signuppage = () => {

    this.setState({ redirect: "/registration" });
  }

  validation = () => {
    let isError = false;
    const errors = this.state;
    errors.EmailError = this.state.Email === '' ? true : false;
    errors.PasswordError = this.state.Password === '' ? true : false;
    this.setState({

      ...errors
    })
    return isError = (errors.Email !== '' && errors.Password !== '') ? true : false
  }

  Next = () => {

    var isValidated = this.validation();
    console.log(this.state.Email);
    console.log(this.state.Password);

    if (isValidated) {
      let data = {
        "email": this.state.Email,
        "password": this.state.Password
      };
      console.log("validation successful");
      axios_service.Login(data).then((result) => {
        console.log(result);
        this.setState({ open: true });
        setTimeout(() => this.setState({ redirect: "/dashBoard" }), 4000)
      }).catch(() => {

      })

      }

    if (!isValidated) {
      alert("validation unsuccessful");
    }
  }

  change = (e) => {

    console.log(e.target.value);
    this.setState({ Email: e.target.value });
  }

  handleChange = (e) => {

    console.log(e.target.value);
    this.setState({ Password: e.target.value });
  }

  render() {

    if (this.state.redirect) {

      return <Redirect to={this.state.redirect} />
    }


    return <div className="content">
          <div className="extra">
            <div className="fundoo">
              <h3 id="f">F</h3>
              <h3 id="u">U</h3>
              <h3 id="n">N</h3>
              <h3 id="d">D</h3>
              <h3 id="o">O</h3>
              <h3 id="x">O</h3>
            </div>
            <div className="signin">Sign In</div>
            <div className="data">Use Your Fundoo Account</div>

            <div className="space"></div>

            <div className="textinput">
              
              <TextField
                ref={this.inputref}
                error={this.state.EmailError}
                label="Enter Email"
                type="Email"
                name="Email"
                variant="outlined"
                onChange={e => this.change(e)}
                helperText={this.state.EmailError ? "Enter Email Address" : ''}
              />
              
              <TextField
                error={this.state.PasswordError}
                label="Enter Password"
                type="Password"
                name="Password"
                variant="outlined"
                onChange={e => this.handleChange(e)}
                helperText={this.state.PasswordError ? "Enter Password" : ''}
              />
              
            </div>
            <div>
            <a href="www.react.com">Forgot Password? </a><p></p>
              Not your computer? Use a private browsing window to <p> sign in. <a href="www.google.com">Learn more</a>
              </p>
            </div>
            <div className="space"></div>
            <div className="inside">
              <a onClick={this.signuppage}>Create Account</a>
              <div className="spacewidth"></div>
              <Button variant="contained" color="primary" onClick={this.Next}>  Sign In </Button>
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

    </div>
  }
}
