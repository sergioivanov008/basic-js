const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  let firstLetter = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) === 'string') {
      let trimName = members[i].trim();
      firstLetter.push(trimName[0].toUpperCase());
    }
  }

  let name = String(firstLetter.sort().join(''));

  return name;
};
