function countOccurrences(str, char) {
    let count = 0;
    let countU = 0;

    for (let i = 0; i < str.length; i++) {
       if (str[i] === char) {
        count++
       }

       if (str[i] === char.toUpperCase()) {
        countU ++
       }
    }

    return { count: count, countU: countU};
}

module.exports = countOccurrences;
