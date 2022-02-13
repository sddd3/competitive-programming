// https://atcoder.jp/contests/abc032/tasks/abc032_d
process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    // i番目の品物で、重さの総和がu以下となるように選ぶ
    const search = (i, W) => {
        if (i === N) { // もう品物は残っていない
            res = 0;
        } else if (W < w[i]) { // この品物は入らない
            res = search(i + 1, W);
        } else { // 入れない場合と入れる場合は両方試す
            const res1 = search(i + 1, W);
            const res2 = search(i + 1, W - w[i]) + v[i];
            res = res1 < res2 ? res2 : res1;
        }
        return res;
    }

    let [header, ...data] = input;
    let res;
    const [N, W] = header.split(' ').map(value => parseInt(value));
    data = data.map(value => value.split(' ').map(value => parseInt(value)));
    const w = [];
    const v = [];
    data.map(value => {
        v.push(value[0]);
        w.push(value[1]);
    });

    console.log(search(0, W));
});
