import Head from 'next/head';
import BeachCard from '../components/beach-card';
import { getLatestFromCity, getOntarioPlaceReading } from 'src/data/store/beaches';
import getWeather from 'src/data/store/weather';
import styles from './style.module.scss';

import type { Beach } from 'src/types/beaches';

// Swim Drink Fish JSON data. Ontario Place beach! Need illustration
//  Published Thurssday afternoons from July 23rd to ???.
// http://translate.theswimguide.org/toronto/json

export async function getStaticProps() {
  const weather = await getWeather();
  const beaches = await getLatestFromCity();
  const ontarioPlaceBeach = await getOntarioPlaceReading();

  return {
    props: {
      beaches,
      ontarioPlaceBeach,
      weather,
    },
    revalidate: 3600, // In seconds
  };
}

interface Props {
  weather: any;
  beaches: Beach[];
  ontarioPlaceBeach: Beach;
}

export default function Home({ weather, beaches, ontarioPlaceBeach }: Props) {
  const { current: currentWeather } = weather;
  const temperature = currentWeather.temp_c;
  const windSpeed = currentWeather.wind_kph;
  const windDirection = currentWeather.wind_dir;

  const beachCards = beaches.map((beach, index) => (
    <div key={index}>
      <BeachCard beach={beach} key={index} />
    </div>
  ));

  return (
    <div className={styles.home}>
      <Head>
        <title>Toronto Beach Report</title>
        <meta name="description" content="The easiest way to access information about Toronto's 11 beaches and they ferry schedule"></meta>
      </Head>
      <main>
        <section className={styles['title-section']}>
          <h1 className={styles.title}>
            Toronto Beaches
          </h1>
          <div className={styles['weather-stats']}>
            <div>
              {temperature}°C
            </div>
            <div>
              {windSpeed} km/h {windDirection}
            </div>
          </div>

        </section>

        <h5>Show respect for the health of others and for the beauty of our natural spaces.</h5>
        <div className={styles['beach-list']}>
          {beachCards}
          <BeachCard beach={ontarioPlaceBeach} key={12} imgSrc={'/beach-11.jpg'} />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
