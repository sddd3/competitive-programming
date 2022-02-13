// https://atcoder.jp/contests/abc082/tasks/abc082_b
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    let [s, t] = input;
    s = s.split('').sort((a, b) => (a < b ? -1 : 1)).join('');
    t = t.split('').sort((a, b) => (a > b ? -1 : 1)).join('');
    if (s < t)
        console.log('Yes');
    else
        console.log('No');
});