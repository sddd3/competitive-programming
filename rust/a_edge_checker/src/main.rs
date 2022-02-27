// https://atcoder.jp/contests/abc238/tasks/abc238_a
use proconio::input;

fn main() {
    input! {
        a: u8,
        b: u8
    }

    if b - a == 1 || b - a == 9 {
        println!("Yes");
    } else {
        println!("No");
    }
}
