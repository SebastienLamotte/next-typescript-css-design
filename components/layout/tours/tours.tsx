import Card from 'components/card/card';
import Button from 'components/ui/button/button';
import styles from './tours.module.scss';

const Tours: React.FC<{}> = () => {
  return (
    <section className={styles.tours}>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <Card
            title={'The sea explorer'}
            cardName="see"
            details={[
              '3 day tour',
              'Up to 30 people',
              '2 tour guides',
              'Sleep in cozy hotels',
              'Difficulty: easy',
            ]}
            price={297}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            title={'The forest hiker'}
            cardName="forest"
            details={[
              '7 day tour',
              'Up to 40 people',
              '6 tour guides',
              'Sleep in provided tents',
              'Difficulty: medium',
            ]}
            price={497}
          />
        </div>
        <div className="col-1-of-3">
          <Card
            title={'the snow adventurer'}
            cardName="snow"
            details={[
              '5 day tour',
              'Up to 15 people',
              '3 tour guides',
              'Sleep in provided tents',
              'Difficulty: hard',
            ]}
            price={897}
          />
        </div>
      </div>
      <div className="u-center-text u-margin-top-big">
        <Button anchor={true} color="green">Discover all tours</Button>
      </div>
    </section>
  );
};

export default Tours;
