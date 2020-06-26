import { useEffect, useState } from 'react';
import styles from './BeachPage.module.scss';
import Link from 'next/link';
import beachRouteMatch from '@/utils/beachRouteMatch';
import BeachMap from '@/components/GoogleMaps/index'
import { beachPositions } from '@/constants/beachPositions';

const BeachPage = ({ beach }) => {
  const [beachID] = useState(beachRouteMatch(beach))
  const [beachData, setBeachData] = useState([]);
  const [latestData, setLatestData] = useState(null);
  const [positionData, setPositionData] = useState(beachPositions(beachID))

  useEffect(() => {
    fetch('../api/getBeachThirtyDays', {
      method: 'POST',
      body: JSON.stringify({
        beachID,
      })
    })
    .then(res => res.json())
    .then(data => stripLatestReadingFromDataSet(data));
  }, []);

  const stripLatestReadingFromDataSet = data => {
    const firstDataPoint = data.shift();
    setBeachData(data);
    setLatestData(firstDataPoint)
  }

  return (
    <div className={styles.beach}>
        <TopSection beachData={beachData} beachID={beachID}/>
        {/* <LatestStats data={latestData}/> */}
        {/* <DirectionsCard data={latestData} /> */}
        <BeachMap positionData={positionData} />
        {/* <div>
          {beachData.map((point, index) => {
            return (
            <div key={index}>
              {point.eColiCount}
            </div>
            )
          })}
        </div> */}
    </div>
  )
}


const DirectionsCard = ({ data }) => {

  const goToMap = () => {
  }

  return (
    <div className={styles.directions} onClick={goToMap}>
      <div className={styles['directions-title']}>
      Get Directions
      </div>
      <video className={styles.video} video autoPlay loop muted>
        <source id="mp4" src="/waves.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

const TopSection = ({ beachData, beachID }) => {
  return (
    <div>
       <div className={styles.header}>
        <h1>
          { beachData ? beachData[0]?.name : ''}
        </h1>
        <Link href='/'>
          <a className={styles['go-back']}>
            Go back
          </a>
        </Link>
      </div>
        <img
          src={`/beach-${beachID}.jpg`}
          alt={`Illustration of ${beachData[0]?.name}`}
          className={styles.image}
        />
    </div>
  )
}

const LatestStats = ({ data }) => {
  if (data) {
    return (
      <div className={styles.latest}>
        Latest: {data.eColiCount}
      </div>
    )
  } else {
    return null
  }
}

export async function getServerSideProps(ctx) {
  const { beach } = ctx.query;
  return {
    props: {
      beach,
    },
  }
}

export default BeachPage
