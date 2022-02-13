// https://atcoder.jp/contests/abc081/tasks/abc081_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

let result = [];
let tmp = [];
let count = 0;
const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    result = result.concat(line.split(' '));
});

reader.on('close', () => {
    const n = result.shift();
    // everyはとても便利な関数
    let flg = result.every(value => 0 === Number(value) % 2);
    while (flg) {
        count++;
        tmp = result;
        result.map((value, index) => tmp[index] = value / 2);
        flg = result.every(value => 0 === Number(value) % 2);
    }
    console.log(count);
});