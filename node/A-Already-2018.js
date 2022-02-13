// https://atcoder.jp/contests/abc085/tasks/abc085_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';
reader.on('line', line => input = line);
reader.on('close', () => {
    const replace = input.replace(/^[0-9][0-9][0-9][0-9]/g, '2018');
    console.log(replace);
});