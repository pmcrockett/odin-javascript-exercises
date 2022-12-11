const findTheOldest = function(_people) {
    function getAge(_person) {
        if (_person.hasOwnProperty("yearOfDeath")) return _person.yearOfDeath - _person.yearOfBirth;
        else return new Date().getFullYear() - _person.yearOfBirth;
    }
    let oldest = null;
    for (let person of _people) {
        if (!oldest || getAge(person) > getAge(oldest)) oldest = person;
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
