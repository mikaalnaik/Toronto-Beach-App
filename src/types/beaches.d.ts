
export interface RawBeach {
  beachId: number,
  beachName: string, // TODO: convert to enum
  eColi: number,
  advisory: string;
  statusFlag: string;
}

export interface Beach extends RawBeach {
  collectionDate: Date;
}
