function getTime(num) {
  var temp = String(Math.trunc(num / 60));
  var tempHour = temp + "".length === 1 ? "0" + temp : temp;
  var tempmin = num % 60 === 0 ? "00" : num % 60;
  return { num: num, time: tempHour + ":" + tempmin };
}
function getTimeSlots(blockTimes, showTimeAsString, interval) {
  var times = 1,
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
  var start = 0;
  var dateTimes = Array(Math.round(24 * times))
    .fill(0)
    .map(function(_) {
      start = start + sums;
      return start;
    });
  blockTimes =
    Array.isArray(blockTimes) === true && blockTimes.length > 0
      ? blockTimes
      : [];
  var res2 = blockTimes.reduce(function(acc, x) {
    return acc
      .filter(function(y) {
        return y < x[0];
      })
      .concat(
        acc.filter(function(y) {
          return y > x[1];
        })
      );
  }, dateTimes);
  if (showTimeAsString === true) {
    return res2
      .map(function(x) {
        return getTime(x);
      })
      .reduce(function(accc, element) {
        accc["" + element.num] = element.time;
        return accc;
      }, {});
  }
  return dateTimes;
}

module.exports = {
  getTimeSlots: getTimeSlots
};

// console.log(getTimeSlots([[340, 550], [920, 1240]], true, "thenth"));
