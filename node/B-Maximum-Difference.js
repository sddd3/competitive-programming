// https://atcoder.jp/contests/abc102/tasks/abc102_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = null;
reader.on('line', line => input = line.split(' ').map(value => parseInt(value)));
reader.on('close', () => {
    input.sort((a, b) => a < b ? -1 : 1);
    const min = input.shift();
    const max = input.pop();
    const answer = max - min;
    console.log(answer);
});