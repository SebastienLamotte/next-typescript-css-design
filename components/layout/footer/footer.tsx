import Image from 'next/image';
import styles from './footer.module.scss';

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['logo-box']}>
        <div className={styles.logo}>
          <Image
            src="/logo-green-2x.png"
            alt="Full logo"
            width={150}
            height={119}
          />
        </div>
        {/* <img src="logo-green-2x.png" alt="Full logo" className={styles.logo} /> */}
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className={styles.navigation}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Company
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Contact us
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Careers
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Privacy policy
                </a>
              </li>
              <li className={styles.item}>
                <a href="#" className={styles.link}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className={styles.copyright}>
            Build by{' '}
            <a href="#" className={styles.link}>
              Sebastien Lamotte
            </a>{' '}
            for his portfolio. Copyright &copy; by Jonas Schmedtmann. You are
            100% allowed to use this webpage for both personal and commercial
            use, but not to claim it as your own design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
