import React, { Component } from "react";

class Accounts extends Component {
  constructor(props) {
    super(props);
    console.log("**accounts - constructor");
    this.state = {
      accounts: [],
      users: []
    };
  }

  static getDerivedStateFromProps() {
    console.log("**accounts - getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("**accounts - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("**accounts - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("**accounts - componentDidMount");
  }

  componentWillMount() {
    console.log("**accounts - componentWillMount");
  }

  componentWillUpdate() {
    console.log("**accounts - componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("**accounts - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("**accounts - componentWillUnmount");
  }

  render() {
    console.log("**Accounts - render");

    return <h2>Account</h2>;
  }
}

export default Accounts;
