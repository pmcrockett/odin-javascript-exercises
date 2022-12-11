const leapYears = function(_year) {
    if ((_year % 100 === 0 && _year % 400 === 0) || (_year % 100 != 0 && _year % 4 === 0)) {
        return true;
    }
return false;
};

// Do not edit below this line
module.exports = leapYears;
