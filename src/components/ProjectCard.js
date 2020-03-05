import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return(
        <div className='ProjectCard'>
            <div className='ProjectCardTop'>
            <a href={props.link}><img src={require('./Images/'+props.url+'.jpg')} /></a>
            </div>
            <div className='ProjectCardBottom'>
                <h1>{props.projectName}</h1>
                <h3>{props.name}</h3>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

export default ProjectCard;