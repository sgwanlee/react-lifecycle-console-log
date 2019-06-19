import React, { Component } from "react";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    console.log("****UserDetail - constructor");
    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("****UserDetail - getDerivedStateFromProps");
  }

  shouldComponentUpdate() {
    console.log("****UserDetail - shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("****UserDetail - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("****UserDetail - componentDidMount");
  }

  componentWillMount() {
    console.log("****UserDetail - componentWillMount");
  }

  componentDidUpdate() {
    console.log("****UserDetail - componentDidUpdate");
  }

  componentWillUpdate() {
    console.log("****UserDetail - componentWillUpdate");
  }

  componentWillUnmount() {
    console.log("****UserDetail - componentWillUnmount");
  }

  render() {
    console.log("****UserDetail - render");

    return <h3>UserDetail - {this.props.match.params.id}</h3>;
  }
}

export default UserDetail;
