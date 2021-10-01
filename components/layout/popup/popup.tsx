import Image from 'next/image';
import Button from 'components/ui/button/button';
import React from 'react';
import styles from './popup.module.scss';

type Props = {
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup: React.FC<Props> = ({ shown, setShown }) => {
  return (
    <div
      className={[styles.popup, shown ? styles.target : ''].join(' ')}
      id="popup"
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.img}>
            <Image
              src="/nat-8.jpg"
              alt="Tour photo"
              width={2000}
              height={1333}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className={styles.img}>
            <Image
              src="/nat-9.jpg"
              alt="Tour photo"
              width={2000}
              height={1333}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.right}>
          <a
            onClick={() => setShown(false)}
            href="#section-tours"
            className={styles.close}
          >
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing. Magnam ratione
            explicabo consequuntur obcaecati harum voluptatum non, odio quam
            assumenda, commodi quis modi? Doloremque deleniti tempore iste ut
            nihil ad a? Cum corporis laudantium quasi commodi, magnam iusto
            dolore, dolorem nam voluptates labore recusandae quibusdam est
            ducimus reprehenderit distinctio nihil temporibus! Magnam ratione
            explicabo consequuntur obcaecati harum voluptatum non, odio quam
            assumenda, commodi quis modi? Doloremque deleniti tempore iste ut
            nihil ad a? Cum corporis laudantium quasi commodi, magnam iusto
            dolore, dolorem nam voluptates labore recusandae quibusdam est
            ducimus reprehenderit distinctio nihil temporibus! Eos assumenda
            exercitationem accusamus?
          </p>
          <Button color="green">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
