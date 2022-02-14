// https://atcoder.jp/contests/abc064/tasks/abc064_a
use proconio::input;

fn main() {
    input! {
        _r: String,
        g: String,
        b: String
    }
    let last_two_digits = g + &b;
    let last_two_digits: u8 = last_two_digits.parse().unwrap();
    if last_two_digits % 4 == 0 {
        println!("YES");
    } else {
        println!("NO");
    }
}
