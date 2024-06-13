const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(n => parseInt(n.split('').reverse().join('')));

const result = Math.max(a, b);
console.log(result);