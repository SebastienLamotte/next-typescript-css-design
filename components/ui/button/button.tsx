import { MouseEventHandler } from 'react';
import styles from './button.module.scss';

type Props = {
  mode?: 'default' | 'text';
  animated?: boolean;
  color?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  mode = 'default',
  animated = false,
  color,
  href,
  onClick = () => {},
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

  return href ? (
    <a href={href} onClick={onClick} className={stylesArray.join(' ')}>
      {children}{' '}
    </a>
  ) : (
    <button onClick={onClick} className={stylesArray.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
