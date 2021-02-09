import { useState, useEffect } from 'react';
import Head from 'next/head';
// const fetch = require('node-fetch');
import BeachCard from '../components/BeachCard';
import { BeachPlaceholderData } from '../constants/beachPlaceholderData';
import styles from './style.module.scss';

export default function Home() {
  const [beachData] = useState(BeachPlaceholderData);

  useEffect(() => {
    // fetch('api/getBeachLatest')
    //   .then(res => res.text())
    //   .then(data => setBeachData(JSON.parse(data)));
  }, []);

  // const goToBeach = () => {
  //   var win = window.open('https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp', '_blank');
  //   win.focus();
  // };

  return (
    <div className={styles.home}>
      <Head>
        <title>Toronto Beach Report</title>
        <meta name="description" content="The easiest way to access information about Toronto's 11 beaches and they ferry schedule"></meta>
      </Head>
      <main>
        {/* <div className={styles.row}>
          <h1>Toronto Beach Report</h1>
          <button onClick={goToBeach} className={styles.ferry}>
            <img src='/ferry.png' />Ferry Tickets
          </button>
        </di.v> */}

        <span className={styles.row}>
          <h1>
          Toronto's beach water quality
          </h1>
          <div>


            <span>
          Wind
            </span>
            <span>
          Temp
            </span>
            <span>
            About the Project
            </span>
          </div>

        </span>
        <h5>
          Last updated: February 9th, 2021
        </h5>

        {/* <h3>Show respect for the health of others and for the beauty of our natural spaces.</h3> */}
        <div className={styles['beach-list']}>
          {beachData.map((beach, index) => (
            <div key={index}>
              <BeachCard beach={beach} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
