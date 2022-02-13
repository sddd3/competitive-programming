// https://atcoder.jp/contests/abc081/tasks/abc081_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

let result = [];
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    result = line.split('');
});

reader.on('close', () => {
    console.log(result.reduce((previous, current) => Number(previous) + Number(current)));
});