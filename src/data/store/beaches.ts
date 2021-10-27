import fetch from 'node-fetch';
import dayjs from 'dayjs';
import type { Beach, RawBeach } from 'src/types/beaches';


export const getLatestFromCity = async () => {
  const { lastUpdate } = await fetch('https://secure.toronto.ca/opendata/adv/last_update/v1?format=json').then(res => res.json());
  const endDate = dayjs(lastUpdate).format('YYYY-MM-DD');
  const startDate = dayjs(lastUpdate).subtract(1, 'day').format('YYYY-MM-DD');
  const beachDataArray = await fetch(`https://secure.toronto.ca/opendata/adv/beach_results/v1?format=json&startDate=${startDate}&endDate=${endDate}`).then(res => res.json());
  const collectionDate = beachDataArray[0].CollectionDate;
  const beaches = beachDataArray[0].data.map((beach: RawBeach) => {
    return { ...beach, collectionDate };
  });

  return beaches;
};


export const getOntarioPlaceReading = async () => {
  const swimGuideData = await fetch('http://translate.theswimguide.org/toronto/json').then(res => res.json());

  const ontarioPlaceReadings = swimGuideData.records.map(record => {
    if (record.location.name === 'Ontario_Place') {
      return record;
    }
  }).filter(val => val);

  const latestOntarioPlaceReading =  ontarioPlaceReadings.reduce((latest, reading ) => {
    if (!latest) {
      return reading;
    } else {
      return new Date(latest.sample.collectionTime) < new Date(reading.sample.collectionTime) ? reading : latest;
    }
  });

  const ontarioPlaceResults = latestOntarioPlaceReading.sample.result;

  const latestFormattedOntarioPlaceReading = {
    beachId: 12,
    eColi: ontarioPlaceResults,
    beachName: 'Ontario Place West Beach',
    advisory: ontarioPlaceResults < 100 ? 'Safe' : 'Unsafe',
    statusFlag: 'Unofficial beach',
    collectionDate: latestOntarioPlaceReading.sample.collectionTime,
  };

  return latestFormattedOntarioPlaceReading;
};
