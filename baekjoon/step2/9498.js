const fs = require('fs');
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

function solution(n) {
  if (n >= 90) {
    return 'A';
  } else if (n >= 80) {
    return 'B';
  } else if (n >= 70) {
    return 'C';
  } else if (n >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(solution(input));