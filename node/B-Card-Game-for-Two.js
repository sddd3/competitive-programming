// https://atcoder.jp/contests/abc088/tasks/abc088_b

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({ input: process.stdin, output: process.stdoup });

const input = [];
reader.on('line', line => input.push(line));

reader.on('close', () => {
    const [N, points] = input;
    const pointsArray = points.split(' ');
    const sortDesc = pointsArray.sort((a, b) => b - a);

    let Alice = 0;
    let Bob = 0;
    for (let i = 0; i < N; i++) {
        if (i % 2 === 0)
            Alice += Number(sortDesc[i]);
        else
            Bob += Number(sortDesc[i]);
    }
    const result = Alice - Bob;
    console.log(result);
});