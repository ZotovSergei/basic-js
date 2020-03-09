const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity == 'string') {
        const sample = parseFloat(sampleActivity) || false;
        if (sample <= 0 || sample >= 15 || !sample) return false;
        return Math.ceil(Math.log(MODERN_ACTIVITY / sample) * HALF_LIFE_PERIOD / 0.693);
        // Math.log(15 / sample) / (Math.log(2) / 5730)
    }
    return false
};