// https://atcoder.jp/contests/abc085/tasks/abc085_a
use proconio::input;
use regex::Regex;

fn main() {
    input! {
        input: String
    }
    let regex = Regex::new(r"^[0-9][0-9][0-9][0-9]").unwrap();
    let answer = regex.replace(&input, "2018");
    println!("{}", answer);
}
