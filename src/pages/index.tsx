import { useState } from 'react';
import Head from 'next/head';
import fetch from 'node-fetch';
import BeachCard from '../components/beach-card';
import styles from './style.module.scss';
import dayjs from 'dayjs';
import { Beach, RawBeach } from 'src/types/beaches';


// Swim Drink Fish JSON data. Ontario Place beach! Need illustration

//  Published THurssday afternoons from July 23rd.
// http://translate.theswimguide.org/toronto/json

export async function getStaticProps() {
  const weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=toronto`).then(r => r.json());
  const { lastUpdate } = await fetch('https://secure.toronto.ca/opendata/adv/last_update/v1?format=json').then(res => res.json());
  const swimGuideData = await fetch('http://translate.theswimguide.org/toronto/json').then(res => res.json());

  const { records } = swimGuideData;
  const ontarioPlaceReadings = records.map(record => {
    if (record.location.name === 'Ontario_Place') {
      return record;
    }
  }).filter(val => val);

  const latestOntarioPlaceReading =  ontarioPlaceReadings.reduce((latest, reading) => {
    if (!latest) {
      return reading;
    } else if (new Date(latest.sample.collectionTime) < new Date(reading.sample.collectionTime)) {
      return reading;
    } else {
      return latest;
    }
  });

  const latestFormattedOntarioPlaceReading = {
    beachId: 12,
    beachName: 'Ontario Place West Beach',
    eColi: latestOntarioPlaceReading.sample.result,
    advisory: latestOntarioPlaceReading.sample.result < 100 ? 'Safe' : 'Unsafe',
    statusFlag: latestOntarioPlaceReading.sample.result < 100 ? 'Safe' : 'Unsafe',
    collectionDate: latestOntarioPlaceReading.sample.collectionTime,
  };


  const endDate = dayjs(lastUpdate).format('YYYY-MM-DD');
  const startDate = dayjs(lastUpdate).subtract(1, 'day').format('YYYY-MM-DD');
  const beachDataArray = await fetch(`https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`).then(res => res.json());
  const collectionDate = beachDataArray[0].CollectionDate;
  const beaches = beachDataArray[0].data.map((beach: RawBeach) => {
    return { ...beach, collectionDate };
  });

  beaches.splice(2, 0, latestFormattedOntarioPlaceReading);

  return {
    props: {
      beaches,
      weather,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  weather: any;
  beaches: Beach[];
}

export default function Home({ weather, beaches }: Props) {

  const { current: currentWeather } = weather;
  const temperature = currentWeather.temp_c;
  const windSpeed = currentWeather.wind_kph;
  const windDirection = currentWeather.wind_dir;
  const [beachData] = useState(beaches);


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
        <section className={styles.row}>
          <h1>
          Toronto's beach water quality
          </h1>
          <div className={styles['weather-stats']}>
            <div>
              Wind {windSpeed}km/h {windDirection}
            </div>
            <div>
              Temp {temperature}°C
            </div>
          </div>

        </section>

        <h5>Show respect for the health of others and for the beauty of our natural spaces.</h5>
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
