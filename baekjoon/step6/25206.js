const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = 20;
const gradePoints = {
  "A+": "4.5",
  "A0": "4.0",
  "B+": "3.5",
  "B0": "3.0",
  "C+": "2.5",
  "C0": "2.0",
  "D+": "1.5",
  "D0": "1.0",
  "F": "0.0"
};

let totalCalPoint = 0;
let totalPoint = 0;

for (let i = 0; i < N; i++) {
  const [_, s, p] = input[i].split(' ');

  if (!gradePoints[p]) continue;

  totalCalPoint += Number(s) * Number(gradePoints[p]);
  totalPoint += Number(s);
}

const result = totalCalPoint / totalPoint;
console.log(result);