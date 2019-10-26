import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        name: "Default Name",
        email: "default@email.com",
        phone: "06306666666",
        imglink: "https://ih0.redbubble.net/image.424783205.2701/flat,1000x1000,075,f.jpg"
      };
    } else {
      this.state = this.props.state;
    }
    // this.fetchUsers = this.fetchUser.bind(this);
  }

  /*fetchUser() {
    fetch("/api/user/" + id.toString())
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState(json);
      });
  }*/

  componentWillMount() {
    // this.fetchUser();
  }

  render() {
    return (
      <div className="user">
        <img src={"" + this.state.imglink} width="50px" height="50px"></img>
        <h5>{this.state.name}</h5>
        <p>{this.state.email}</p>
        <p>{this.state.phone}</p>
      </div>
    );
  }
}

export default Person;
