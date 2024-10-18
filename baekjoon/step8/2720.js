const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const moneyArr = input.slice(1);

const CHANGE_MONEY = [25, 10, 5, 1]

function solution(arr) {
  const result = Array(arr.length).fill('');

  for (let i = 0; i < arr.length; i++) {
    let money = Number(arr[i]);

    for (let j = 0; j < CHANGE_MONEY.length; j++) {
      result[i] += Math.floor(money / CHANGE_MONEY[j]) + ' ';
      money %= CHANGE_MONEY[j];
    }
  }

  return result.join('\n');
}

console.log(solution(moneyArr))