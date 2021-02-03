import styles from './BeachCard.module.scss';
import Warning from '@/components/Warning/index';
import LoadingSkeleton from '@/components/LoadingSkeleton/index';
import moment from 'moment';
import { beachIDToRouteName } from '@/utils/beachRouteMatch';
import { beachPositions } from '@/utils/beachPositions';
import { useRouter } from 'next/router';

const BeachCard = ({ beach }) => {
  const { eColiCount, sampleDate, beachState, beachID } = beach;
  const beachDisplayName = beachPositions(beachID).displayName;
  const router = useRouter();

  const clickBeach = () => {
    const beachRouteName = beachIDToRouteName(beachID);
    router.push(`/beach/${beachRouteName}`, `/beach/${beachRouteName}`);
  };

  return (
    <div className={styles['beachcard']} onClick={clickBeach}>
      <img src={`/beach-${beachID}.jpg`} className={styles.image} />
      <div className={styles['beachcard-content']}>
        <Warning beachID={beachID} />
        <div className={styles.title}>{beachDisplayName}</div>
        <div className={styles.ecoli}>
          ?
          {/* 32 E. coli ppm */}
          {/* <LoadingSkeleton value={eColiCount} /> */}
        </div>
        <div className={styles.beachstatus}>
          {/* Status:
          <LoadingSkeleton
            value={beachState}
            className={`${styles.status} ${
              eColiCount < 100 ? styles['status-green'] : styles['status-red']
            }`}
          /> */}
        </div>
        {/* <div>Sampled on:{moment(sampleDate).fromNow()}</div> */}
      </div>
    </div>
  );
};

export default BeachCard;
