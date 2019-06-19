import React from "react";
import "./App.css";
import User from "./users";
import Account from "./accounts";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("App - constructor");
    this.state = {
      accounts: [],
      users: []
    };
  }

  static getDerivedStateFromProps() {
    console.log("App - getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("App - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("App - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("App - componentDidMount");
  }

  componentWillMount() {
    console.log("App - componentWillMount");
  }

  componentWillUpdate() {
    console.log("App - componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("App - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App - componentWillUnmount");
  }

  handleChangeUser = () => {
    const users = [...this.state.users];
    users.push(1);
    this.setState({ users });
  };

  handleChangeAccount = () => {
    const accounts = [...this.state.accounts];
    accounts.push(2);
    this.setState({ accounts });
  };

  render() {
    console.log("App - render");
    return (
      <div className="App">
        <Link to="/">
          <h1>App</h1>
        </Link>
        current users : {this.state.users}
        current accounts : {this.state.accounts}
        <ul>
          <li>
            <Link to="/users">User</Link>
            <button type="button" onClick={this.handleChangeUser}>
              Change User
            </button>
          </li>
          <li>
            <Link to="/accounts">Account</Link>
            <button type="button" onClick={this.handleChangeAccount}>
              Change Account
            </button>
          </li>
        </ul>
        <Switch>
          <Route
            path="/users"
            render={props => <User users={this.state.users} {...props} />}
          />
          <Route
            path="/accounts"
            render={props => (
              <Account accounts={this.state.accounts} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
