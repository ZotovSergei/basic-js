const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string') {    
    const sample = sampleActivity*1 || false;  
    if (sample <= 0 || sample >= 15 || !sample) return false;
    return (Math.log((15/sample))) /((Math.log(2))/5730);
  }
  return false
  
};
