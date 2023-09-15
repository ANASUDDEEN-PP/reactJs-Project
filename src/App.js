import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Login from './components/Login';
import Registration from './components/Registration';
import UserDashboard from './components/UserDashboard';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'; // Provide the correct import path

function App() {
  return (
    <Router>
      <Switch>
        {/*<Route exact path="/" component={Login} />*/}
        <Route path="/registration" component={Registration} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/admin-login" component={AdminLogin} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
