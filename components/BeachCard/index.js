import styles from './BeachCard.module.scss'
import Warning from '@/components/Warning/index'

const BeachCard = ({beach}) => {
  const { name, eColiCount, beachAdvisory, sampleDate, beachState, beachID } = beach;
  return (
    <div className={styles['beachcard']}>
      <Warning beachID={beachID} />
      <h2>{name}</h2>
      <b>{eColiCount}</b>
      <div>{beachState}</div>
      <div>
        Sample Date:
          {sampleDate}
      </div>
    </div>
  )
}

export default BeachCard;
