var uniqueRandomArray = require('unique-random-array')
var animalNames = require('./animal.names.json')

// var getRandomItem = uniqueRandomArray(animalNames);

module.exports = {
    all : animalNames,
    random : uniqueRandomArray(animalNames)
};

// function random(number) {
//     if(number === undefined) {
//         return getRandomItem();
//     } else {
//         var randomItem = [];
//         for(var i = 0; i < number; i++) {
//             randomItem.push(getRandomItem());
//         }
//         return randomItem;
//     }
// }