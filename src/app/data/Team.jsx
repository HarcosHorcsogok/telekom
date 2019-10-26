import React from "react";
import TeamListItem from "../components/TeamListItem.jsx"

class Team{
  constructor(id=0, name="5G IoT", place="6C/2", 
    members=[new Person("Peter Szecsi", "5G IoT", ["c++"], "szepet.jpg", "https://google.com"),
      new Person("Peter Pecsi", "5G IoT", ["c++"], "szepet.jpg", "https://google.com")],
    skills=["5G", "iot"],
    json = {empty: true}
  ){
    if(json.empty)
    {
      this.id = id
      this.name = name;
      this.place = place;
      this.members = members;
      this.skills = skills;
    }
    else
    {
      this.id = json.id
      this.name = json.name;
      this.place = json.place;
      this.members = json.members;
      this.skills = json.skills;
    }
    
  }

  toListItem(){
    return <TeamListItem state={{name: this.name, place: this.place, url: "https://google.com"}} key={this.id}/>;
  }
}

export default Team;