import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

import styles from './ProjectCard.module.css';

const ProjectCard = (props) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.Row}>
        <div className={styles.ProjectCardImg}>
          <Link
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
            passHref
          >
            <NextImage
              alt={props.projectName}
              src={'/images/projects/' + props.url + '.png'}
              width={'226em'}
              height={'290em'}
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
