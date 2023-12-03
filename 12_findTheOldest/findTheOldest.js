const findTheOldest = function(_people) {
    function getAge(_person) {
        if (_person.hasOwnProperty("yearOfDeath")) return _person.yearOfDeath - _person.yearOfBirth;
        else return new Date().getFullYear() - _person.yearOfBirth;
    }

    return _people.sort((a, b) => getAge(a) > getAge(b) ? -1 : 1)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
