import React from 'react';

import styles from './button.module.scss';

type Props = {
  mode?: 'default' | 'text';
  animated?: boolean;
  white?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  mode = 'default',
  animated = false,
  white = false,
  children,
}) => {
  let stylesArray: string[];
  if (mode === 'text') stylesArray = [styles['btn-text']];
  else {
    stylesArray = [styles.btn];
    if (white) stylesArray.push(styles['btn--white']);
    if (animated) stylesArray.push(styles['btn--animated']);
  }

  return (
    <a href="#" className={stylesArray.join(' ')}>
      {children}
    </a>
  );
};

export default Button;
