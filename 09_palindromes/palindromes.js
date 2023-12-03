const palindromes = function (_str) {
    let noPunct = _str.toLowerCase().replaceAll(/[^a-z]/ig, "");
    noPunct = [...noPunct];
    return noPunct.every((_char, _idx, _arr) => 
        _char === _arr[_arr.length - 1 - _idx]);
};

// Do not edit below this line
module.exports = palindromes;
