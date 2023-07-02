function parseDataFromRfc2822(value) {
  return new Date(value);
}

function parseDataFromIso8601(value) {
  return new Date(value);
}

function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function timeSpanToString(startDate, endDate) {
  const timeDifference = endDate - startDate;
  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((timeDifference / 1000) % 60)
    .toString()
    .padStart(2, '0');
  const milliseconds = (timeDifference % 1000).toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function angleBetweenClockHands(date) {
  const hours = date.getUTCHours() % 12;
  const minutes = date.getUTCMinutes();
  const anglePerHour = 360 / 12;
  const anglePerMinute = 360 / 60;

  const hourHandAngle = (hours + minutes / 60) * anglePerHour;
  const minuteHandAngle = minutes * anglePerMinute;

  let angle = Math.abs(hourHandAngle - minuteHandAngle);
  if (angle > 180) {
    angle = 360 - angle;
  }

  return (angle * Math.PI) / 180;
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
