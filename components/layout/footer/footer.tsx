import Image from 'next/image';
import styles from './footer.module.scss';

const footerNavBar = [
  'Company',
  'Contact us',
  'Careers',
  'Privacy policy',
  'Terms',
];

const Footer: React.FC<{}> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['logo-box']}>
        <div className={[styles.logo, styles.desktop].join(' ')}>
          <Image
            src="/logo-green-2x.png"
            alt="Full logo"
            quality={1}
            width={300}
            height={238}
            layout="responsive"
          />
        </div>
        <div className={[styles.logo, styles.phone].join(' ')}>
          <Image
            src="/logo-green-small-1x.png"
            alt="Full logo"
            quality={1}
            width={150}
            height={30}
            layout="responsive"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className={styles.navigation}>
            <ul className={styles.list}>
              {footerNavBar.map((item) => (
                <li key={item} className={styles.item}>
                  <a href="#" className={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
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