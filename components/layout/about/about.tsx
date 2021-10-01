import Button from 'components/ui/button/button';
import Composition from 'components/composition/composition';
import styles from './about.module.scss';

const photos: [string, string, string] = [
  '/nat-1-large.jpg',
  '/nat-2-large.jpg',
  '/nat-3-large.jpg',
];

const About: React.FC<{}> = () => {
  return (
    <section className={styles.about}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You&apos;re going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam nihil cumque eaque veniam eveniet facere, ullam inventore
            ipsum, dolore nam voluptas enim consectetur, libero aliquam
            necessitatibus ab dicta assumenda?
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you naver have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam nihil cumque eaque veniam eveniet facere, ullam
            inventore, libero aliquam necessitatibus ab dicta assumenda?
          </p>

          <Button href='#' mode="text">Learn more &rarr;</Button>
        </div>
        <Composition pictures={photos} />
      </div>
    </section>
  );
};

export default About;
