// https://atcoder.jp/contests/abc246/tasks/abc246_a
process.stdin.resume();
process.stdin.setEncoding('utf8');
const reader = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const input = [];
reader.on('line', line => input.push(line));

reader.on('close', () => {
    const [a, b, c] = input;
    const [ax, ay] = a.split(' ').map(value => Number(value));
    const [bx, by] = b.split(' ').map(value => Number(value));
    const [cx, cy] = c.split(' ').map(value => Number(value));

    let x;
    if (ax === bx) {
        x = cx;
    } else if (bx === cx) {
        x = ax;
    } else {
        x = bx;
    }

    let y;
    if (ay === by) {
        y = cy;
    } else if (by === cy) {
        y = ay;
    } else {
        y = by;
    }

    console.log(`${x} ${y}`);
});