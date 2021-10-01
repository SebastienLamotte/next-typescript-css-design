import { useState, useRef } from 'react';
import Transition from 'react-transition-group/Transition';
import styles from './navigation.module.scss';

const NavBar = [
  'About Natour',
  'Your benefits',
  'Popular tours',
  'Stories',
  'Book now',
];

const Navigation: React.FC<{}> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const nodeRef = useRef(null);

  return (
    <div className={styles.navigation}>
      <input className={styles.checkbox} type="checkbox" id="navi-toggle" />
      <label
        onClick={() => setIsChecked((prevVal) => !prevVal)}
        htmlFor="navi-toggle"
        className={styles.button}
      >
        <span className={styles.icon}>&nbsp;</span>
      </label>
      <div className={styles.background}>&nbsp;</div>

      <Transition
        nodeRef={nodeRef}
        in={isChecked}
        timeout={800}
        mountOnEnter
        unmountOnExit
      >
        <nav ref={nodeRef} className={styles.nav}>
          <ul className={styles.list}>
            {NavBar.map((item, id) => (
              <li key={item} className={styles.item}>
                <a href="#" className={styles.link}>
                  <span>{`0` + (id + 1)}</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </div>
  );
};

export default Navigation;
