const fibonacci = function(_num) {
    if (_num < 1) return "OOPS";
    let fibArr = [];
    for (let i = 0; i < _num; i++) {
        let val = 1;
        if (i >= 2) {
            val = fibArr[i - 1] + fibArr[i - 2];
        }
        fibArr.push(val);
    }
    return fibArr[fibArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
