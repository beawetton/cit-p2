/*
    CIT 281 Project 2
    Name: Beatrice Wetton
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random letter in the lowercase alphabet
function getRandomLetter() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns a random string between 10 and 20 characters
function getRandomString(minLength, maxLength) {
    let result = "";

    for (let i = 0; i < getRandomInteger(minLength, maxLength); i++) {
        result += getRandomLetter();
    }
    return result;
}

// Returns a random string in alphabetical order
function getSortedString(string) {
    let chars = string.split("");
    let arr = chars.sort();
    return arr.toString().replace(/,/g, '');
}

//let lengthOfOutputString = getRandomInteger(10, 20);

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");


console.log(getSortedString(getRandomString(10, 20)));

