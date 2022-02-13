// https://atcoder.jp/contests/abc095/tasks/abc095_a
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input = line.split(''));
reader.on('close', () => {
    let total = 0;
    input.map(value => {
        if (value === 'o') { total += 100 }
    })

    console.log(700 + total);
});