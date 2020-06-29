export function beachPositions(beachID) {
  const beachPositionData = {
    1: {
      name: 'Marie Curtis Park East Beach',
      displayName: 'Marie Curtis',
      map: '43.585563-79.540732',
      coordinates: {
        latitude: 43.585563,
        longitude: -79.540732,
      },
    },
    2: {
      name: 'Sunnyside Beach',
      map: '43.637432-79.455954',
      displayName: 'Sunnyside',
      coordinates: {
        latitude: 43.637432,
        longitude: -79.455954,
      },
    },
    3: {
      name: "Hanlan's Point Beach",
      map: '43.619325-79.393254',
      displayName: 'Hanlan\'s Point',
      coordinates: {
        latitude: 43.619325,
        longitude: -79.393254,
      },
    },
    4: {
      name: 'Gibraltar Point Beach',
      map: '43.612487-79.382173',
      displayName: 'Gibraltar Point',
      coordinates: {
        latitude: 43.612487,
        longitude: -79.382173,
      },
    },
    5: {
      name: 'Centre Island Beach',
      map: '43.616072-79.373826',
      displayName: 'Centre Island',
      coordinates: {
        latitude: 43.616072,
        longitude: -79.373826,
      },
    },
    6: {
      name: "Ward's Island Beach",
      map: '43.630088-79.352318',
      displayName: 'Ward\'s Island',
      coordinates: {
        latitude: 43.630088,
        longitude: -79.352318,
      },
    },
    7: {
      name: 'Cherry Beach',
      map: '43.636742-79.344117',
      displayName: 'Cherry',
      coordinates: {
        latitude: 43.636742,
        longitude: -79.344117,
      },
    },
    8: {
      name: 'Woodbine Beaches',
      map: '43.66381-79.305057',
      displayName: 'Woodbine',
      coordinates: {
        latitude: 43.66381,
        longitude: -79.305057,
      },
    },
    9: {
      name: 'Kew Balmy Beach',
      map: '43.668559-79.290057',
      displayName: 'Kew Balmy',
      coordinates: {
        latitude: 43.668559,
        longitude: -79.290057,
      },
    },
    10: {
      name: "Bluffer's Beach Park",
      map: '43.71363-79.225948',
      displayName: 'Bluffer\'s',
      coordinates: {
        latitude: 43.71363,
        longitude: -79.225948,
      },
    },
    11: {
      name: 'Rouge Beach',
      map: '43.793217-79.118217',
      displayName: 'Rouge',
      coordinates: {
        latitude: 43.793217,
        longitude: -79.118217,
      },
    },
  };
  return beachPositionData[beachID];
}
