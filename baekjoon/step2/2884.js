const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

const date = new Date(2020, 1, 1, a, b, 0);
date.setMinutes(date.getMinutes() - 45);

const m = date.getHours();
const s = date.getMinutes();

const result = `${m} ${s}`;
console.log(result);