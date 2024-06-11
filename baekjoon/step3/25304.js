const fs = require('fs');
const [a, _, ...c] = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const receipt = parseInt(a);
const receiptArr = c.map(r => r.split(' ').map(Number));
const total = receiptArr.reduce((acc, cur) => acc + (cur[0] * cur[1]), 0);

const result = receipt === total ? 'Yes' : 'No';

console.log(result);
