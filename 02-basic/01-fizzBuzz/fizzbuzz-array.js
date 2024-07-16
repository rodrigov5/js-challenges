function fizzbuzz(arr) {
    newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if(item % 3 === 0 && item % 5 === 0) {
            newArr.push("FizzBuzz");
        } else if(item % 3 === 0) {
            newArr.push("Fizz");
        } else if(item % 5 === 0) {
            newArr.push("Buzz");
        } else {
            newArr.push(item);
        }

    }

    return newArr;
}

module.exports = fizzbuzz;