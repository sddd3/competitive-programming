// https://atcoder.jp/contests/abc085/tasks/abc085_b
use proconio::input;

fn main() {
    input! {
        n: usize,
        mut d: [u8; n],
    }

    d.sort();
    d.dedup();
    println!("{}", d.len());
}
