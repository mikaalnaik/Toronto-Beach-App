import { useState, useEffect } from 'react';
import Head from 'next/head';
const fetch = require('node-fetch');
import styles from './Home.module.scss';
import BeachCard from '@/components/BeachCard/index';
import { BeachPlaceholderData } from '@/constants/beachPlaceholderData';

export default function Home() {
  const [beachData, setBeachData] = useState(BeachPlaceholderData);

  useEffect(() => {
    fetch('api/getBeachLatest')
      .then((res) => res.text())
      .then((data) => setBeachData(JSON.parse(data)));
  }, []);

  return (
    <div className={styles.home}>
      <Head>
        <title>Toronto Beach App</title>
      </Head>
      <main>
        <h1>Toronto Beach App</h1>
        <div className={styles['beach-list']}>
          {beachData.map((beach) => (
            <div>
              <BeachCard beach={beach} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
