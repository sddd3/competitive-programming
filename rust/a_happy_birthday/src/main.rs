// https://atcoder.jp/contests/abc100/tasks/abc100_a
use proconio::input;

fn main() {
    input! {
        a: u8,
        b: u8
    }

    if a <= 8 && b <= 8 {
        println!("Yay!");
    } else {
        println!(":(");
    }
}
