import { useState, useEffect } from 'react';
import Head from 'next/head';
const fetch = require('node-fetch');
import styles from './Home.module.scss'
import BeachCard from '@/components/BeachCard/index';

export default function Home() {
const [beachData, setBeachData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('api/getBeachLatest')
      .then((res) => res.text())
      .then((data) => {
        setBeachData(JSON.parse(data))
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.home}>
      <Head>
        <title>Toronto Beach App</title>
      </Head>
      <main>
        <h1>
          Toronto Beach App
        </h1>
          {
            isLoading && (
              <div>
                loadings
              </div>
            )
          }
        {beachData.map((beach) => (
          <div>
            <BeachCard beach={beach}/>
          </div>
        ))}
      </main>
    </div>
  );
}
