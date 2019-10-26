import React from "react";
import PersonListItem from "../components/PersonListItem.jsx"

class Person{
    constructor(id=0, name="Peter Szecsi", team="5G IoT", skills= ["c++"], chatUrl = "https://google.com"){
        this.id = id;
        this.name = name;
        this.team = team;
        this.skills = skills;
        this.chatUrl = chatUrl;
    }

    toListItem(){
        return <PersonListItem state={{name: this.name, team: this.team, imgUrl: "img/" + this.name.toLowerCase().replace(" ", "_") + ".jpg" , chatUrl: this.chatUrl}} key={this.id}/>;
    }
}

export default Person;