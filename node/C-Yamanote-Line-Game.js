// https://atcoder.jp/contests/abc244/tasks/abc244_c

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = null;
reader.on('line', line => {

    if (input) {
        input = input.filter(number => number != line);
        if (input) {
            console.log(input[0]);
            input.shift();
        }
    }

    if (input === null) {
        input = [];
        const number = 2 * line + 1;
        for (let i = 1; i <= number; i++) {
            input.push(i);
        }
        console.log(input[0]);
        input.shift();
    }
});