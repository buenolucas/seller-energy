import React from "react";
import { Router, Route, Link, Redirect } from "react-router-dom";

import { history } from "./helpers";
import { authenticationService } from "./services";
import { PrivateRoute } from "./components";
import Login from "./screens/Login";

import NavBar from "./components/NavBar";
import Dashboard from "./screens/Dashboard";
import TrainingTracks from "./screens/TrainingTracks";
import Reports from "./screens/Reports";
import Settings from "./screens/Settings";
import Header from "./components/Header";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    authenticationService.currentUser.subscribe(x =>
      this.setState({ currentUser: x })
    );
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router history={history}>
        <div className="app">
          {currentUser && <NavBar />}
          <div className="app-chrome">
            {currentUser && <Header logout={this.logout} currentUser={currentUser} />}
            <div className="modules-stack">
              <Redirect from="/" to="/dashboard/" />
              <PrivateRoute path="/dashboard/" exact component={Dashboard} />
              <PrivateRoute path="/tracks/" component={TrainingTracks} />
              <PrivateRoute path="/reports/" component={Reports} />
              <PrivateRoute path="/settings/" component={Settings} />
              <Route path="/login" component={Login} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
