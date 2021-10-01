import Image from 'next/image';
import styles from './composition.module.scss';

type Props = {
  pictures: [string, string, string];
};

const Composition: React.FC<Props> = ({ pictures }) => {
  return (
    <div className="col-1-of-2">
      <div className={styles.composition}>
        {pictures.map((picture, id) => (
          <div
            key={`photo${id}`}
            className={[styles.photo, styles[`photo-${id + 1}`]].join(' ')}
          >
            <Image
              src={picture}
              alt={`Photo ${id}`}
              quality={25}
              width={1000}
              height={667}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Composition;
