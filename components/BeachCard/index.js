import styles from './BeachCard.module.scss';
import Warning from '@/components/Warning/index';
import LoadingSkeleton from '@/components/LoadingSkeleton/index';
import moment from 'moment';

const BeachCard = ({ beach }) => {
  const {
    name,
    eColiCount,
    beachAdvisory,
    sampleDate,
    beachState,
    beachID,
  } = beach;
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
          <LoadingSkeleton value={beachState} />
        </div>
        <div>
          Sample Date:
          {moment(sampleDate).format('MMMM Do, YYYY')}
        </div>
      </div>
    </div>
  );
};

export default BeachCard;
