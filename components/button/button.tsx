import React from 'react';

import styles from './button.module.scss';

type Props = {
  animated?: boolean;
  white?: boolean;
  children: React.ReactNode;
};

export default function Button({
  animated = false,
  white = false,
  children,
}: Props) {
  let stylesArray = [styles.btn];
  if (white) stylesArray.push(styles['btn--white'])
  if (animated) stylesArray.push(styles['btn--animated'])

  return <a href="#" className={stylesArray.join(' ')}>Discover our tours</a>
}
