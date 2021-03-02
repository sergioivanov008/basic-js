const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof (sampleActivity) == 'undefined' || typeof (sampleActivity) !== 'string' || isNaN(sampleActivity) || sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0) {
        return false;
    } else {
        return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (Math.log(2) / HALF_LIFE_PERIOD));
    }
};
