import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ""
      }
    };
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    fetch("/asd")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          user: json
        });
      });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="user">
        <h1>Hello {this.state.user.msg}</h1>
      </div>
    );
  }
}

export default User;
