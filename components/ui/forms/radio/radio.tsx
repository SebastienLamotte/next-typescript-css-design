import styles from './radio.module.scss';

type Props = {
  label: string;
  id: string;
  name: string;
};

const Radio: React.FC<Props> = ({ label, id, name }) => {
  return (
    <div className={styles.group}>
      <input type="radio" id={id} className={styles.input} name={name} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles['radio-button']}></span>
        {label}
      </label>
    </div>
  );
};

export default Radio;
