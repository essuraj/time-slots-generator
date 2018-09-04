function getTime(num) {
  var tempHour = String(Math.trunc(num / 60));
  var hour = tempHour + "".length === 1 ? "0" + tempHour : tempHour;
  var min = num % 60 === 0 ? "00" : num % 60;
  return { num: num, time: hour + ":" + min };
}
function getTimeSlots(blockTimes, showTimeAsString, interval, includeStartBlockedTime,includeEndBlockedTime) {
  var times = 1,
    sums = 60;
    includeStartBlockedTime = includeStartBlockedTime === true ? true : false;
    includeEndBlockedTime = includeEndBlockedTime === true ? true : false;
  switch (interval) {
    case "tenth":
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
  blockTimes = Array.isArray(blockTimes) === true && blockTimes.length > 0 ? blockTimes : [];
  if (blockTimes.length > 0) {
    dateTimes = blockTimes.reduce(function(acc, x) {
      return acc
        .filter(function(y) {
          return includeStartBlockedTime == true ? y <= x[0] : y < x[0];
        })
        .concat(
          acc.filter(function(y) {
            return includeEndBlockedTime == true ? y >= x[1] : y > x[1];
          })
        );
    }, dateTimes);
  }
  if (showTimeAsString === true) {
    return dateTimes
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

// console.log(getTimeSlots([[340, 550], [920, 1240]], true, "tenth"));
