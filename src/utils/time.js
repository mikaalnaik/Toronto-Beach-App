import dayjs from 'dayjs';

export function daysAgo(stringTime) {
  return dayjs(stringTime).fromNow();
}
