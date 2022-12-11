const caesar = function(_str, _shift) {
    function getNewLetter(_oldLetter, _shift, _asciiA) {
        let shifted = _oldLetter.charCodeAt(0) - _asciiA.charCodeAt(0) + _shift;
        let newLetter;
        if (shifted >= 0) newLetter = _asciiA.charCodeAt(0) + shifted % 26;
        else newLetter = _asciiA.charCodeAt(0) + (26 + shifted) % 26;
        return String.fromCharCode(newLetter);
    }
    const upperRegex = new RegExp("[A-Z]");
    const lowerRegex = new RegExp("[a-z]");
    let retStr = "";
    for (let letter of _str) {
        let newLetter = letter;
        if (lowerRegex.test(letter)) {
            newLetter = getNewLetter(letter, _shift, "a");
        } else if (upperRegex.test(letter)) {
            newLetter = getNewLetter(letter, _shift, "A");
        }
        retStr += newLetter;
    }
    return retStr;
};

// Do not edit below this line
module.exports = caesar;
