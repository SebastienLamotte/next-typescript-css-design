import Image from 'next/image';
import Button from '../button/button';

import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header__logo-box"]}>
        <img src="/logo-white.png" alt="Logo" className={styles["header__logo"]} />
      </div>

      <div className={styles["header__text-box"]}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary--main"]}>Outdoors</span>
          <span className={styles["heading-primary--sub"]}>is where life happens</span>
        </h1>
        <Button white={true} animated={true} >
          Discover our tours
        </Button>
      </div>
    </header>
  );
}