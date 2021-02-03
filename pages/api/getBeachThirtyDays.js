// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const TorontoBeach = require('torontobeach');
const moment = require('moment');

export default async (req, res) => {
  console.log(req.body)
  const { beachID } = JSON.parse(req.body)
  const now = moment().format('YYYY-MM-DD');
  const thirtyDaysAgo = moment().subtract(30, 'days').format('YYYY-MM-DD');
  const beachData = await TorontoBeach.getSpecificBeachForRange(beachID, thirtyDaysAgo, now);
  res.json(beachData);
};
