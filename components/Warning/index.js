import isBeachClosed from '@/constants/beachStatus';
import styles from './Warning.module.scss';

const Warning = ({ beachID }) => {
  return isBeachClosed(beachID) ? (
    <div className={styles.warning}>Beach Closed</div>
  ) : (
    <></>
  );
};

export default Warning;
