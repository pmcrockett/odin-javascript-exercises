const getTheTitles = function(_books) {
    let titles = [];
    for (let book of _books) {
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
