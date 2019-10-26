import React, { Component } from "react";

class Team extends Component {
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
  }

  componentWillMount() { }

  render() {
    return (
      <div className="topic">
        <img src={"" + this.state.imglink} width="50px" height="50px"></img>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Topic;
