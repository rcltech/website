import React from 'react';

import styles from './SubHeading.module.css';

const SubHeading = (props) => {
  return <p className={styles.subhead}>{props.subheading}</p>;
};

export default SubHeading;
