import Image from 'next/image'

import styles from './composition.module.scss'

const Composition: React.FC<{}> = () => {
  return (
    <div className="col-1-of-2">
      <div className={styles.composition}>
        <div className={[styles.photo, styles['photo-1']].join(' ')}>
          <Image
            src="/nat-1-large.jpg"
            alt="Photo 1"
            width="300"
            height="203"
          />
        </div>
        <div className={[styles.photo, styles['photo-2']].join(' ')}>
          <Image
            src="/nat-2-large.jpg"
            alt="Photo 2"
            width={300}
            height={203}
          />
        </div>
        <div className={[styles.photo, styles['photo-3']].join(' ')}>
          <Image
            src="/nat-3-large.jpg"
            alt="Photo 3"
            width={300}
            height={203}
          />
        </div>
      </div>
    </div>
  );
};

export default Composition;
