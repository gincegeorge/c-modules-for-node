require('nan')

const { addon } = require('./build/Release/addon.node');

addon();


// const addon = require('./build/Release/addon.node');
// const input = 'x';
// console.log(addon);
// const hash = addon.simpleHash(input);

// console.log(`Input: ${input}`);
// console.log(`Hash: ${hash}`);