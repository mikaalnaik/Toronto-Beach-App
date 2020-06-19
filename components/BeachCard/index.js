import styles from './BeachCard.module.scss'

const BeachCard = ({beach}) => {
  const { name, eColiCount, beachAdvisory, sampleDate, beachState } = beach;
  return (
    <div className={styles['beachcard']}>
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
