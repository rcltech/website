import React from 'react';
import Link from 'next/link';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.nav} id="myTopnav">
      <div className={styles.navLeft}>
        <Link href="/" passHref>
          <img alt="logo" src={'/images/ClubLogo.png'} />
        </Link>
        <Link href="/">R.C. Tech Club</Link>
      </div>
      <div className={styles.links}>
        <Link href="/#Projects">Applications</Link>
        <Link href="/#Team">Our Team</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default NavBar;
