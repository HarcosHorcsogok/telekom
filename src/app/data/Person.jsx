import React from "react";
import PersonListItem from "../components/PersonListItem.jsx"

class Person{
    constructor(id=0, name="Peter Szecsi", role="manager", team="5G IoT", json={empty: true}){
        if(json.empty)
        {
            this.id = id;
            this.name = name;
            this.role = role;
            this.team = team;
        }
        else
        {
            this.id = json.id;
            this.name = json.name;
            this.role = json.role;
            this.team = json.team;
        }
    }

    toListItem(){
        return <PersonListItem state={{name: this.name, team: this.team, imgUrl: "img/" + this.name.toLowerCase().replace(" ", "") + ".jpg" , chatUrl: "slack://" + this.name.toLowerCase().replace(" ", ".")}} key={this.id}/>;
    }

    toListItemTeam(){
        return <PersonListItem state={{name: this.name, team: this.role, imgUrl: "img/" + this.name.toLowerCase().replace(" ", "") + ".jpg" , chatUrl: "slack://" + this.name.toLowerCase().replace(" ", ".")}} key={this.id}/>;
    }
}

export default Person;