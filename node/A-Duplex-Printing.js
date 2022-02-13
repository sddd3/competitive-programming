// https://atcoder.jp/contests/abc157/tasks/abc157_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(Number(line)));
reader.on('close', () => {
    const [N] = input;
    const remainder = N % 2;
    const quotient = (N - remainder) / 2;
    const result = quotient + remainder;
    console.log(result);
});