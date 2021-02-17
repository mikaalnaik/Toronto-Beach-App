import moment from 'moment';

export function daysAgo(stringTime) {
  return moment(stringTime).fromNow()
}
