import React, { Component } from "react";

class TechnologySkill extends Component {
  constructor(props) {
    super(props);
    if (!this.props.state) {
      this.state = {
        name: "Default Topic",
        imglink: "https://cdn.freebiesupply.com/logos/thumbs/2x/kotlin-1-logo.png"
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

export default TechnologySkill;
