import React from "react";
import PersonListItem from "../components/PersonListItem.jsx"

class Person{
    constructor(id=0, name="Peter Szecsi", team="5G IoT", skills= ["c++"], imgUrl = "szepet.jpg", chatUrl = "https://google.com"){
        this.id = id;
        this.name = name;
        this.team = team;
        this.skills = skills;
        this.imgUrl = imgUrl;
        this.chatUrl = chatUrl;
    }

    toListItem(){
        return <PersonListItem state={{name: this.name, team: this.team, imgUrl: this.imgUrl, chatUrl: this.chatUrl}} key={this.id}/>;
    }
}

export default Person;