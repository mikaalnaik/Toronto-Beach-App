export default function isBeachClosed(beachID) {
  const statuses = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  };
  return statuses[beachID];
}
