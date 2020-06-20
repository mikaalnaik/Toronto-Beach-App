import styles from './BeachCard.module.scss';
import Warning from '@/components/Warning/index';
import LoadingSkeleton from '@/components/LoadingSkeleton/index';
import moment from 'moment';

const BeachCard = ({ beach }) => {
  const { name, eColiCount, sampleDate, beachState, beachID } = beach;
  return (
    <div className={styles['beachcard']}>
      <img src={`/beach-${beachID}.jpg`} className={styles.image} />
      <div className={styles['beachcard-content']}>
        <Warning beachID={beachID} />
        <div className={styles.title}>{name}</div>
        <div className={styles.ecoli}>
          Ecoli: <LoadingSkeleton value={eColiCount} />
        </div>
        <div className={styles.beachstatus}>
          Status:
          <LoadingSkeleton
            value={beachState}
            className={`${styles.status} ${
              eColiCount < 100 ? styles['status-green'] : styles['status-red']
            }`}
          />
        </div>
        <div>Sampled on:{moment(sampleDate).fromNow()}</div>
      </div>
    </div>
  );
};

export default BeachCard;
