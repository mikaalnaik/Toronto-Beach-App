// import { useRouter } from 'next/router';
// import moment from 'moment';
// // import Warning from 'components/Warning/index';
// import { beachIDToRouteName } from 'utils/beachRouteMatch';
import { Beach } from 'src/types/beaches';
import { beachPositions } from '../../utils/beachPositions';
import styles from './style.module.scss';

interface Props {
  beach: Beach
}

const BeachCard = ({ beach }: Props) => {
  const { eColi, collectionDate, beachId } = beach;
  const beachDisplayName = beachPositions(beachId).displayName;
  // const router = useRouter();

  const clickBeach = () => {
    // const beachRouteName = beachIDToRouteName(beachID);
    // router.push(`/beach/${beachRouteName}`, `/beach/${beachRouteName}`);
  };

  return (
    <div className={styles['beachcard']} onClick={clickBeach}>
      <div className={styles['image-wrapper']}>
        <img src={`/beach-${beach.beachId}.jpg`} className={styles.image} />
      </div>
      <div className={styles['beachcard-content']}>
        {/* <Warning beachID={beachID} /> */}
        <div className={styles.title}>{beachDisplayName}</div>
        <div className={styles.ecoli}>
          {eColi} E. coli ppm
          {/* <LoadingSkeleton value={eColiCount} /> */}
        </div>
        <div className={styles.beachstatus}>
        </div>
        {collectionDate}
      </div>
    </div>
  );
};

export default BeachCard;
