import Button from 'components/ui/button/button';
import styles from './about.module.scss';
import React from 'react';
import Composition from 'components/layout/about/composition/composition';

const About: React.FC<{}> = () => {
  return (
    <section className={styles['about']}>
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
            inventore.
          </p>

          <Button mode="text">Learn more &rarr;</Button>
        </div>
        <Composition />
      </div>
    </section>
  );
};

export default About;
