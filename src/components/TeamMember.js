import React, { Component } from 'react';
import {IoIosLink} from "react-icons/io";

import "./TeamMember.css"
class TeamMember extends Component {
    render(){
        return(   
        <div className='UserCard'>
            <div className='RowUser'>
            <div className='UserCardTop'>
                <img alt="user image" src={require('./Images/'+this.props.url+'.jpg')} />
            </div>
            <div className='UserCardBottom'>
                <h2>{this.props.name} <a target="_blank" href={this.props.userlink}><IoIosLink/></a></h2> 
                <h3>{this.props.job}</h3>
                <p>{this.props.about}</p>
            </div>
            </div>
        </div>

        )
    }
};

export default TeamMember;
