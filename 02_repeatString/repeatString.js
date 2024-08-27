const repeatString = function (str, count) {

    if (count < 0) {
        return 'ERROR';
    }

    let temp = '';

    for (let i = 0; i < count; i++) {
        temp += str;      
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
