
const fs = require('fs');


fs.readFile('OscarWilde.txt', 'utf8', (error, contents) => {
    console.log('Innehållet i OscarWilde.txt är: ', contents);
});

fs.writeFile('OscarWilde.txt', quote, (error) => {
    console.log('Quote saved');
});