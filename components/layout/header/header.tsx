import Image from 'next/image';
import Button from 'components/ui/button/button';
import styles from './header.module.scss';

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <div className={styles['background-image']}>
        <Image src="/hero.jpg" alt="relaxing landscape" layout="fill" priority={true} />
      </div>
      <div className={styles['logo-box']}>
        <div className={styles.logo}>
          <Image src="/logo-white.png" alt="Logo" width={69} height={35} />
        </div>
      </div>

      <div className={styles['text-box']}>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <Button href="#section-tours" color="white" animated={true}>
          Discover our tours
        </Button>
      </div>
    </header>
  );
};

export default Header;
