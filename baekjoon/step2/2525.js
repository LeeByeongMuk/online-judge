const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');
const [h, m] = input[0].split(' ').map(Number);
const addTime = parseInt(input[1]);

const date = new Date(2020, 1, 1, h, m);
date.setMinutes(date.getMinutes() + addTime);

const rh = date.getHours();
const rm = date.getMinutes();
const result = `${rh} ${rm}`;

console.log(result);