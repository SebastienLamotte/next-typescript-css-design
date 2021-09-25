import Button from 'components/ui/button/button';
import styles from './card.module.scss';

type Props = {
  cardName: string;
  title: string;
  details: string[];
  price: number;
};

const Card: React.FC<Props> = ({ title, cardName, details, price }) => {
  return (
    <div className={styles.card}>
      <div className={[styles.side, styles.front].join(' ')}>
        <div className={[styles.picture, styles['pic-' + cardName]].join(' ')}>
          &nbsp;
        </div>
        <h4 className={styles.heading}>
          <span className={[styles.span, styles['span-' + cardName]].join(' ')}>
            {title}
          </span>
        </h4>
        <div className={styles.details}>
          <ul>
            {details.map((detail, id) => (
              <li key={`detail-${id}`}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={[styles.side, styles.back, styles[cardName]].join(' ')}>
        <div className={styles.cta}>
          <div className={styles['price-box']}>
            <p className={styles['price-only']}>Only</p>
            <p className={styles['price-value']}>${price}</p>
          </div>
          <Button color="white">Book now!</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
