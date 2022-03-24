// https://atcoder.jp/contests/abc244/tasks/abc244_b

// コード長   実行時間 メモリ
// 1126 Byte 259 ms   34548 KB actions.map()で操作した場合
// 1175 Byte 84 ms    34508 KB for文で操作した場合

process.stdin.resume();
process.stdin.setEncoding('utf8');

const reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
reader.on('line', line => input.push(line));
reader.on('close', () => {
    const [N, T] = input;
    const actions = T.split('');
    const point = { x: 0, y: 0 };
    let rCount = 1;

    const length = actions.length;
    for (let i = 0; i < length; i++) {
        switch (actions[i]) {
            case 'S':
                const direction = rCount % 4;
                switch (direction) {
                    case 0:
                        point.y++;
                        break;
                    case 1:
                        point.x++;
                        break;
                    case 2:
                        point.y--;
                        break;
                    case 3:
                        point.x--;
                        break;
                }
                break;
            case 'R':
                rCount++;
                break;
        }
    }
    console.log(`${point.x} ${point.y}`);
});