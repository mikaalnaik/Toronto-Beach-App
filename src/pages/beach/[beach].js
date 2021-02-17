



import { useEffect, useState } from 'react';


export default function BeachPage() {
  return (<div>Howdy folks</div>);
}

// import styles from './BeachPage.module.scss';
// import Link from 'next/link';
// import beachRouteMatch from './utils/beachRouteMatch';
// import { daysAgo } from '@/utils/time';
// import BeachMap from '@/components/GoogleMaps/index';
// import { beachPositions } from '@/utils/beachPositions';

// const BeachPage = ({ beach }) => {
//   const [beachID] = useState(beachRouteMatch(beach));
//   const [beachData, setBeachData] = useState([]);
//   const [latestData, setLatestData] = useState(null);
//   const [positionData, setPositionData] = useState(beachPositions(beachID));

//   // useEffect(() => {
//   //   fetch('../api/getBeachThirtyDays', {
//   //     method: 'POST',
//   //     body: JSON.stringify({
//   //       beachID,
//   //     }),
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => stripLatestReadingFromDataSet(data));
//   // }, []);

//   const stripLatestReadingFromDataSet = data => {
//     const firstDataPoint = data.shift();
//     setBeachData(data);
//     setLatestData(firstDataPoint);
//   };

//   return (
//     <div className={styles.beach}>
//       <TopSection beachData={beachData} beachID={beachID}/>
//       {/* <LatestStats data={latestData}/> */}
//       { latestData && <StatCard data={latestData} /> }
//       <BeachMap positionData={positionData} beachName={beachData[0]?.name}/>
//     </div>
//   );
// };


// const StatCard = ({ data }) => {
//   const safetyMessage = data.eColiCount < 100  && data.eColiCount ? 'Safe to swim' : 'Not safe';
//   const eColiCount = data.eColiCount ? data.eColiCount : 'No data';

//   return (
//     <div>
//       <div className={styles['stat-title-row']}>
//         <h4 className={styles['stat-title']}>
//         Latest Reading from the city
//         </h4>
//         {daysAgo(data.sampleDate)}
//       </div>
//       <div className={styles['video-card']} >
//         <div className={styles['directions-title']}>
//           <div>
//             {safetyMessage}
//           </div>
//           <div className={styles['ecoli-title']}>
//             E.coli: {eColiCount}
//           </div>
//         </div>
//         <video className={styles.video} video autoPlay loop muted>
//           <source id="mp4" src="/waves.mp4" type="video/mp4"/>
//         </video>
//       </div>
//     </div>
//   );
// };

// const TopSection = ({ beachData, beachID }) => {
//   return (
//     <div>
//       <div className={styles.header}>
//         <h1>
//           { beachData ? beachData[0]?.name : ''}
//         </h1>
//         <Link href='/'>
//           <a className={styles['go-back']}>
//             Go back
//           </a>
//         </Link>
//       </div>
//       <img
//         src={`/beach-${beachID}.jpg`}
//         alt={`Illustration of ${beachData[0]?.name}`}
//         className={styles.image}
//       />
//     </div>
//   );
// };

// export async function getServerSideProps(ctx) {
//   const { beach } = ctx.query;
//   return {
//     props: {
//       beach,
//     },
//   };
// }

// export default BeachPage;
