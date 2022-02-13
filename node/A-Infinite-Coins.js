// https://atcoder.jp/contests/abc088/tasks/abc088_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(Number(line)));
reader.on('close', () => {
    const [N, A] = input;
    const remainder = N % 500;
    const quotient = remainder <= A;
    const result = remainder === 0 || quotient ? 'Yes' : 'No';
    console.log(result);
});