// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require('node-fetch');
const BeachFunctions = require('../../beachData');

export default async (req, res) => {
  res.statusCode = 200;
  const beachData = await BeachFunctions.getAllBeachesLatest();
  res.json(beachData);
};
