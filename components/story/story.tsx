import Image from 'next/image';
import styles from './story.module.scss';

type Props = {
  img: {
    src: string;
    alt: string;
    caption: string;
  };
  title: string;
};

const Story: React.FC<Props> = ({
  img: { src, alt, caption },
  title,
}) => {
  return (
    <div className={styles.story}>
      <figure className={styles.shape}>
        <div className={styles.image}>
          <Image
            src={src}
            alt={alt}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
      <div className={styles.text}>
        <h3 className="heading-tertiary u-margin-bottom-small">
          {title}
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          reiciendis voluptatum earum quas ex, molestias dolorem cum nulla,
          praesentium itaque inventore, voluptatibus magni culpa molestiae
          dolorum sequi quae sint repellendus. molestias dolorem cum nulla,
          praesentium itaque inventore.
        </p>
      </div>
    </div>
  );
};

export default Story;
