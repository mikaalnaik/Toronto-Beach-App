import React from 'react';
import styles from './style.module.scss';

interface Props {
  eColi: number | null;
}

const BeachStatus = ({ eColi }: Props) => {
  const getStatusColour = () => {
    let style = `${styles.status}`;
    if (!eColi) {
      return style;
    } else if (eColi >= 100) {
      style = `${style} ${styles['status-red']}`;
    } else if (eColi < 100) {
      style = `${style} ${styles['status-green']}`;
    }
    return style;
  };

  return <span className={`${getStatusColour()}`} />;
};

export default BeachStatus;
