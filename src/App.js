import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Registration_Page from "./pages/RegistrationPage/RegistrationPage.jsx";
import DashBoard from "./pages/DashBoard/DashBoard.jsx";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './pages/protectedroute.jsx';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path= "/login" component={LoginPage} />
          <Route exact path= "/registration" component={Registration_Page} />
          <ProtectedRoute path= "/dashBoard" component={DashBoard} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
