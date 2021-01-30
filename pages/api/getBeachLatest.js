// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TorontoBeach = require('torontobeach');

export default async (req, res) => {
  const beachData = await TorontoBeach.getAllBeachesLatest();
  res.status(200).json(beachData)
};
