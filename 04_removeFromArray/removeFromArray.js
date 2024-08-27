const removeFromArray = function (array, ...args) {
    let newArr = array.filter(x => {
        return !args.includes(x)
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
