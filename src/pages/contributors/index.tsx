import React from 'react';
import contributors from 'src/data/contributors';
import styles from './style.module.scss';



export default function Contributors() {

  return (
    <div className={styles.component}>
      <h1>
        Contributors
      </h1>
      {contributors.map(contributor => {
        return (
          <div className={styles.contributor}>
            {contributor.name}
          </div>
        );
      })}
    </div>
  );
}
