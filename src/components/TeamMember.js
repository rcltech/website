import React, { Component } from 'react';


class TeamMember extends Component {
    render(){
        return(
        <div>
        <p>Hey my name is {this.props.name}</p>
        <img src = {require('./Images/'+this.props.url+'.jpg')} />
        </div>
        )
    }
};

export default TeamMember;
