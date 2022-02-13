// https://atcoder.jp/contests/abc086/tasks/arc089_a

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    const [N, ...points] = input;
    let answer = 'Yes';
    for (let i = 0; i < N; i++) {
        let [pret, prex, prey] = i === 0 ? [0, 0, 0] : points[i - 1].split(' ').map(value => parseInt(value), 10);
        let [t, x, y] = points[i].split(' ').map(value => parseInt(value), 10);
        const distance = Math.abs(x - prex) + Math.abs(y - prey);
        const time = t - pret;
        const def = time - distance;
        if ((distance > time) || (def & 1)) {
            answer = 'No';
        }
    }
    console.log(answer);
});