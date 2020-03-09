module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
    // if (date.getYear() <= 1970) return false;
    let month = 12 / date.getMonth();
    switch (date.getMonth()) {
        case 11:
        case 12:
        case 1:
            return 'winter';
            break;
        case 2:
        case 3:
        case 4:
            return 'spring'
            break;
        case 5:
        case 6:
        case 7:
            return 'summer'
            break;
        case 8:
        case 9:
        case 10:
            return 'autumn'
            break;
        default:
            return 'winter';
            break;
    }
};