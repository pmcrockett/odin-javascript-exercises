const removeFromArray = function(_arr, ..._remove) {
    for (let item of _remove) {
        let idx = _arr.findIndex(e => e === item);
        if (idx > -1) {
            _arr.splice(idx, 1);
        }
    }
    return _arr;
};

// Do not edit below this line
module.exports = removeFromArray;
