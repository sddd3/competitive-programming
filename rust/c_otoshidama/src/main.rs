// https://atcoder.jp/contests/abc085/tasks/abc085_c
use proconio::input;

fn main() {
    input! {
        n: u64,
        y: u64,
    }
    let mut answer = String::new();
    let mut a = 0;
    loop {
        let mut b = 0;
        loop {
            let c = n - a - b;
            let total = a * 10000 + b * 5000 + c * 1000;
            if total == y {
                answer = a.to_string() + " " + &b.to_string() + " " + &c.to_string();
            }
            if a + b == n {
                break;
            }
            b += 1;
        }
        if a == n {
            break;
        };
        a += 1;
    }

    if answer == "" {
        println!("-1 -1 -1 ");
    } else {
        println!("{}", answer);
    }
}
