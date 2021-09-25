import styles from './navigation.module.scss';

const Navigation: React.FC<{}> = () => {
  return (
    <div className={styles.navigation}>
      <input className={styles.checkbox} type="checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className={styles.button}>
        <span className={styles.icon}>&nbsp;</span>
      </label>
      <div className={styles.background}>&nbsp;</div>
    
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>01</span>
              About Natour
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>02</span>
              Your benefits
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>03</span>
              Popular tours
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>04</span>
              Stories
            </a>
          </li>
          <li className={styles.item}>
            <a href="#" className={styles.link}>
              <span>05</span>
              Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
