const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }

  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    cleanArr.push(arr[i]);
  }

  if (cleanArr[0] == `--discard-prev` || cleanArr[0] == `--double-prev`) {
    cleanArr.shift();
  }

  if (cleanArr[cleanArr.length - 1] == `--discard-next` || cleanArr[cleanArr.length - 1] == `--double-next`) {
    cleanArr.pop();
  }

  let newArr = [];
  for (let i = 0; i < cleanArr.length; i++) {
    if (cleanArr[i] == `--discard-next`) {
      i = i + 1;
    } else if (cleanArr[i] == `--discard-prev`) {
      if (cleanArr[i - 2] !== `--discard-next`) {
        newArr.pop();
      }
    } else if (cleanArr[i] == `--double-next`) {
      newArr.push(cleanArr[i + 1]);
    } else if (cleanArr[i] == `--double-prev`) {
      if (cleanArr[i - 2] !== '--discard-next') {
        newArr.push(cleanArr[i - 1]);
      }
    } else {
      newArr.push(cleanArr[i]);
    }
  }

  let lastArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] !== undefined) {
      lastArr.push(newArr[i]);
    }
  }

  return lastArr;

};
