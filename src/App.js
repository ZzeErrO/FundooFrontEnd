import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Registration_Page from "./pages/RegistrationPage/RegistrationPage.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path= "/login" component={LoginPage} />
          <Route path= "/registration" component={Registration_Page} />
          <Route path= "/dashBoard" component={DashBoard} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
