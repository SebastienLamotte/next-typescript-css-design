import styles from './input.module.scss';

type Props = {
  label: string;
  type?: string;
  id: string;
};

const Input: React.FC<Props> = ({ label, type, id }) => {
  return (
    <>
      <input
        type={type || 'text'}
        id={id}
        className={styles['input']}
        placeholder={label}
        autoComplete="off"
        required
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </>
  );
};

export default Input;
