import styles from './box.module.scss';

type Props = {
  title: string;
  text: string;
  icon: string;
};

const Box: React.FC<Props> = ({ title, text, icon }) => {
  return (
    <div className={styles['box']}>
      <i className={`${styles.icon} ${icon}`}></i>
      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Box;
