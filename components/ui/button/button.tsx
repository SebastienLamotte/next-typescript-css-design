import styles from './button.module.scss';

type Props = {
  mode?: 'default' | 'text';
  animated?: boolean;
  color?: string;
  anchor?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  mode = 'default',
  animated = false,
  color,
  anchor = false,
  children,
}) => {
  let stylesArray: string[];
  if (mode === 'text') stylesArray = [styles['btn-text']];
  else {
    stylesArray = [styles.btn];
    if (color === 'white') stylesArray.push(styles['white']);
    else if (color === 'green') stylesArray.push(styles['green']);

    if (animated) stylesArray.push(styles['animated']);
  }

  return anchor ? (
    <a href="#" className={stylesArray.join(' ')}>
      {children}{' '}
    </a>
  ) : (
    <button className={stylesArray.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
