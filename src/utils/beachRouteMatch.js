
export default function beachRouteMatch(beachID){
  const beachNamesHash = {
    mariecurtis: 1,
    sunnyside: 2,
    hanlans: 3,
    gibraltar: 4,
    centerisland: 5,
    wardsisland: 6,
    cherry: 7,
    woodbine: 8,
    kewbalmy: 9,
    bluffers: 10,
    rouge: 11,
    'ontario-place': 12,
  };
  return beachNamesHash[beachID];
}

export function beachIDToRouteName(id) {
  const beachNamesHash = {
    1: 'mariecurtis',
    2: 'sunnyside',
    3: 'hanlans',
    4: 'gibraltar',
    5: 'centerisland',
    6: 'wardsisland',
    7: 'cherry',
    8: 'woodbine',
    9: 'kewbalmy',
    10: 'bluffers',
    11: 'rouge',
    12: 'ontario-place',
  };
  return beachNamesHash[id];
}
