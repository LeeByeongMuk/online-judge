const fs = require('fs');
const [S, i] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

console.log(S[i - 1]);