import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Registration_Page from "./pages/RegistrationPage/RegistrationPage.js";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Route path= "/login" component={LoginPage} />
      <Route path= "/registration" component={Registration_Page} />
      </BrowserRouter>
  );
}

export default App;
