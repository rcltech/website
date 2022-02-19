import React from 'react';
import Link from 'next/link';
import { IoIosLink } from 'react-icons/io';

import styles from './TeamMember.module.css';

function TeamMember(props) {
  return (
    <div className={styles.UserCard}>
      <div className={styles.UserCardTop}>
        <div className={styles.UserCardImageWrapper}>
          <img alt={props.name} src={'/images/members/' + props.url + '.jpg'} />
        </div>
      </div>
      <div className={styles.UserCardBottom}>
        <h2>
          {props.name}{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
            passHref
          >
            <IoIosLink />
          </Link>
        </h2>
        <h3>{props.job}</h3>
        <p>{props.about}</p>
      </div>
    </div>
  );
}

export default TeamMember;
