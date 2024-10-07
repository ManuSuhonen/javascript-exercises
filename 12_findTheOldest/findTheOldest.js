const findTheOldest = function (people) {
    pAge = (p) => {
        return (p.yearOfDeath ?? new Date().getFullYear()) - p.yearOfBirth;
    }
    
    people.sort((p1, p2) => {
        return pAge(p2) - pAge(p1)
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
