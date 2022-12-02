// Place a string into a console.log() and then run the script in the terminal using 'node script.js'
const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter Number:", num => {
    const sum = num*num;
    console.log(`Square of ${num} is ${sum}!`);
    readline.close();
});