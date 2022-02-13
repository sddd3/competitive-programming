// https://atcoder.jp/contests/abc064/tasks/abc064_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', line => input = line.replace(/\s/g, ''));
reader.on('close', () => {
    const lastTwoDigits = Number(input.slice(-2));
    const result = lastTwoDigits % 4 === 0 ? 'YES' : 'NO';
    console.log(result);
});