export default function isBeachClosed(beachID) {
  const statuses = {
    1: false,
    2: false,
    3: true,
    4: true,
    5: true,
    6: true,
    7: false,
    8: false,
    9: false,
    10: false,
    11: true,
  };
  return statuses[beachID];
}
