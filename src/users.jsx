import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import UserDetail from "./userDetail";

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("**Users - constructor");
    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("**Users - getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("**Users - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("**Users - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("**Users - componentDidMount");
  }

  componentWillMount() {
    console.log("**Users - componentWillMount");
  }

  componentDidUpdate() {
    console.log("**Users - componentDidUpdate");
  }

  componentWillUpdate() {
    console.log("**Users - componentWillUpdate");
  }

  componentWillUnmount() {
    console.log("**Users - componentWillUnmount");
  }
  render() {
    console.log("**Users - render");

    return (
      <div>
        <h1>User</h1>

        <ul>
          <li>
            <Link to="/users/1">User1</Link>
          </li>
          <li>
            <Link to="/users/2">User2</Link>
          </li>
        </ul>

        <Route path="/users/:id" component={UserDetail} />
      </div>
    );
  }
}

export default Users;
