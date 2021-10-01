import Image from 'next/image';
import Box from '../../box/box';
import styles from './features.module.scss';

const paragraphs = {
  p1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam reprehenderit soluta alias!',
  p2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam reprehenderit soluta alias!',
  p3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam reprehenderit soluta alias!',
  p4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam reprehenderit soluta alias!',
};

const Features: React.FC<{}> = () => {
  return (
    <section className={styles.features}>
      <div className={styles['bgImage-container']}>
        <div className={styles.bgImage}>
          <Image
            src="/nat-4.jpg"
            quality={1}
            alt="relaxing landscape"
            layout="fill"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          <Box
            title="Explore the world"
            text={paragraphs.p1}
            icon="icon-basic-world"
          />
        </div>
        <div className="col-1-of-4">
          <Box
            title="Meet nature"
            text={paragraphs.p2}
            icon="icon-basic-compass"
          />
        </div>
        <div className="col-1-of-4">
          <Box
            title="Find your way"
            text={paragraphs.p3}
            icon="icon-basic-map"
          />
        </div>
        <div className="col-1-of-4">
          <Box
            title="Live a healthier life"
            text={paragraphs.p4}
            icon="icon-basic-heart"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
