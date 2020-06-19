import styles from './BeachCard.module.scss'
import Warning from '@/components/Warning/index'
import moment from 'moment';

const BeachCard = ({beach}) => {
  const { name, eColiCount, beachAdvisory, sampleDate, beachState, beachID } = beach;
  return (
    <div className={styles['beachcard']}>
      <img src={`/beach-${beachID}.jpg`} className={styles.image}/>
      <Warning beachID={beachID} />
      <div className={styles.title}>{name}</div>
      <b>Ecoli: {eColiCount}</b>
      <div>{beachState}</div>
      <div>
        Sample Date:
          {moment(sampleDate).format('MMMM Do, YYYY')}
      </div>
    </div>
  )
}

export default BeachCard;
