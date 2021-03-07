const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let separator = options.separator || '+';
  let addition = options.addition;
  if (String(addition) == 'null') {
    addition = String(addition)
  }
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator || '|';
  let stringAll = String(str);

  if (addition !== undefined && additionRepeatTimes == undefined) {
    stringAll = stringAll + addition;
  } else if (addition !== undefined && additionRepeatTimes !== undefined) {
    let additionStringArray = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionStringArray.push(addition);
    }
    stringAll = stringAll + additionStringArray.join(additionSeparator);
  }

  if (repeatTimes !== undefined) {
    let additionStringArray = [];
    for (let i = 0; i < repeatTimes; i++) {
      additionStringArray.push(stringAll);
    }
    stringAll = additionStringArray.join(separator);
  }

  return stringAll;
};