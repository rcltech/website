import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
    return(
        <div className='ProjectCard'>
            <div className='ProjectCardTop'>
            <a className="text-link" target="_blank" href={props.link}><img alt="project card" src={require('./Images/'+props.url+'.png')} /></a>
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