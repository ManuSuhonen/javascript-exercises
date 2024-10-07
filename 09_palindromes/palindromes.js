const palindromes = function (x) {
    x = x.replace(/[^0-9A-Z]+/gi,"").toLowerCase();

    let reversed = [...x].reduceRight((acc, curr) => 
        acc + curr);

    return x == reversed;
};

// Do not edit below this line
module.exports = palindromes;
