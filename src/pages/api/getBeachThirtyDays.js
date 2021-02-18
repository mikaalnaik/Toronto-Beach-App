// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const TorontoBeach = require('torontobeach');
// const dayjs = require('dayjs');

// export default async (req, res) => {
//   const { beachID } = JSON.parse(req.body)
//   const now = dayjs().format('YYYY-MM-DD');
//   const thirtyDaysAgo = dayjs().subtract(30, 'days').format('YYYY-MM-DD');
//   const beachData = await TorontoBeach.getSpecificBeachForRange(beachID, thirtyDaysAgo, now)
//   res.json(beachData);
// };
