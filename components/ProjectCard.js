import React from 'react';
import Link from 'next/link';

import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.Row}>
        <div className={styles.ProjectCardImg}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
            passHref
          >
            <img
              alt={props.projectName}
              src={'/images/projects/' + props.url + '.png'}
            />
          </Link>
        </div>
        <div className={styles.ProjectCardInfo}>
          <h1>{props.projectName}</h1>
          <h3>{props.name}</h3>
          <p>{props.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
