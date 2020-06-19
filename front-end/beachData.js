const fetch = require('node-fetch');
const convert = require('xml-js');
const get = require('lodash.get');
const BeachConstants = require('./beachConstants');
const { beachNames } = BeachConstants;

function getAllBeachesAllTime() {
  return getFromApi(
    'http://app.toronto.ca/tpha/ws/beaches/history/all.xml?v=1.0'
  );
}

function getAllBeachesLatest() {
  return getFromApi('http://app.toronto.ca/tpha/ws/beaches.xml?v=1.0');
}

function getAllBeachesForRange(start, endDate) {
  if (!start || !end) {
    throw 'Both a start date and end date are required. We also expect a date format of YYYY-MM-DD';
  }
  return getFromApi(
    `http://app.toronto.ca/tpha/ws/beaches/history.xml?v=1.0&from=${start}&to=${endDate}`
  );
}

function getSpecificBeachForRange(beachID, startDate, endDate) {
  if (!startDate || !endDate || !beachID) {
    throw 'Both a start date and end date are required. We also expect a date format of YYYY-MM-DD';
  }
  return getFromApi(
    `http://app.toronto.ca/tpha/ws/beach/${beachID}/history.xml?v=1.0&from=${startDate}&to=${endDate}`
  );
}

function getSpecificBeachAllTime(beachID) {
  if (!startDate || !endDate || !beachID) {
    throw 'Both a start date and end date are required. We also expect a date format of YYYY-MM-DD';
  }
  return getFromApi(
    `http://app.toronto.ca/tpha/ws/beach/${beachID}/history/all.xml?v=1.0`
  );
}

function getFromApi(url) {
  return fetch(url)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      const beachData = formatBeachData(res);
      console.log({ beachData });
      return beachData;
    })
    .catch((err) => {
      console.log({ err });
    });
}

const test = getSpecificBeachForRange(1, '2019-02-01', '2019-09-31').then(
  (res) => {
    // console.log({ res });

    res.forEach((item) => {
      // console.log({ item });
    });
  }
);

const formatBeachData = (rawData) => {
  const data = JSON.parse(
    convert.xml2json(rawData, {
      compact: false,
      spaces: 4,
    })
  );

  const beaches = get(data, ['elements', 0, 'elements', 1, 'elements']);
  console.log({ beachNames });
  return beaches
    .map((beach) => {
      const beachData = get(beach, ['elements']);
      const beachID = get(beach, ['attributes', 'beachId']);
      return {
        beachID: Number(beachID),
        name: get(beachNames, [beachID, 'name']),
        map: get(beachNames, [beachID, 'map']),
        sampleDate: get(beachData, [0, 'elements', 0, 'text']),
        publishDate: get(beachData, [1, 'elements', 0, 'text']),
        eColiCount: Number(get(beachData, [2, 'elements', 0, 'text'])),
        beachAdvisory: get(beachData, [3, 'elements', 0, 'text']),
        beachState: get(beachData, [4, 'elements', 0, 'text']),
      };
    })
    .filter((element) => {
      if (get(element, ['name'])) {
        return element;
      }
    });
};

module.exports = {
  getAllBeachesAllTime,
  getAllBeachesLatest,
  getAllBeachesForRange,
  getSpecificBeachForRange,
  getSpecificBeachAllTime,
};
