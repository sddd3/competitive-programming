// https://atcoder.jp/contests/abc049/tasks/arc065_a

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input = line.split(' ').map(value => parseInt(value)));
reader.on('close', () => {
    
});