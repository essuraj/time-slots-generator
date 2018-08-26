function getTime(num) {
  let temp = String(Math.trunc(num / 60));
  let tempHour = temp + "".length === 1 ? "0" + temp : temp;
  let tempmin = num % 60 === 0 ? "00" : num % 60;
  return { num: num, time: tempHour + ":" + tempmin };
}

function getTimeSlots(blockTimes, showTimeAsString, interval) {
  let times = 1,
    sums = 60;
  switch (interval) {
    case "thenth":
      times = 6;
      sums = 10;
      break;
    case "quarter":
      times = 4;
      sums = 15;
      break;
    case "half":
      times = 2;
      sums = 30;
      break;
    case "one":
      times = 1;
      sums = 60;
      break;
    case "two":
      times = 1 / 2;
      sums = 120;
      break;
    case "three":
      times = 1 / 3;
      sums = 180;
      break;
    case "four":
      times = 1 / 4;
      sums = 240;
      break;

    default:
      times = 1;
      sums = 60;
      break;
  }

  let start = 0;
  let dateTimes = Array(Math.round(24 * times))
    .fill(0)
    .map(_ => {
      start = start + sums;
      return start;
    });
  blockTimes =
    Array.isArray(blockTimes) === true && blockTimes.length > 0
      ? blockTimes
      : [];
  let res2 = blockTimes.reduce((acc, x) => {
    return acc.filter(y => y < x[0]).concat(acc.filter(y => y > x[1]));
  }, dateTimes);
  if (showTimeAsString === true) {
    return res2.map(x => getTime(x)).reduce((accc, element) => {
      accc[`${element.num}`] = element.time;
      return accc;
    }, {});
  }
  return dateTimes;
}

module.exports = {
  getTimeSlots: getTimeSlots
};

console.log(getTimeSlots([[340, 550], [920, 1240]],true,"thenth"));
