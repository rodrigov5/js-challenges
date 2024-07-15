function removeDuplicates(arr) {
    let newArr = [];
    let seen = {};

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if(!seen[item]) {
            seen[item] = true;
            newArr.push(item);
        }
    }

    return newArr;
}

module.exports = removeDuplicates;