import { useState, useEffect } from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import BeachCard from '../components/BeachCard';
import { BeachPlaceholderData } from '../constants/beachPlaceholderData';
import styles from './style.module.scss';


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=toronto`).then(r => r.json());

  const date = new Date().toString();

  return {
    props: {
      weather,
      date,
    },
    revalidate: 1000, // In seconds
  };
}

export default function Home({ weather, date }) {

  console.log({ date });
  const [beachData] = useState(BeachPlaceholderData);


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
          Last updated: {date}
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
