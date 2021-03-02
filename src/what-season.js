const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof (date) == 'undefined') {
    return 'Unable to determine the time of year!';
  }

  try {
    !date.getTime()
  } catch (error) {
    throw new Error(error);
  }

  let month = date.getMonth() + 1;

  if (month == 3 || month == 4 || month == 5) {
    return 'spring';
  } else if (month == 6 || month == 7 || month == 8) {
    return 'summer';
  } else if (month == 9 || month == 10 || month == 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}