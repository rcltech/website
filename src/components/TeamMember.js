import React, { Component } from 'react';


import "./TeamMember.css"
class TeamMember extends Component {
    render(){
        return(   
        <div className='UserCard'>
            <div className='UserCardTop'>
                <img alt="user image" src={require('./Images/'+this.props.url+'.jpg')} />
            </div>
            <div className='UserCardBottom'>
                <h2>{this.props.name}</h2>
                <h3>{this.props.job}</h3>
                <p>{this.props.about}</p>
            </div>
        </div>

        )
    }
};

export default TeamMember;
