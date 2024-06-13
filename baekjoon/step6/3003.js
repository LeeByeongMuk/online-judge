const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const CHESS_PIECES = [1, 1, 2, 2, 2, 8];
const result = input.map((p, i) => CHESS_PIECES[i] - parseInt(p)).join(' ');
console.log(result);