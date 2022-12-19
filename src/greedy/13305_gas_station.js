const colors = require('colors');
// 표준 입력으로 다음 정보가 주어진다. 첫 번째 줄에는 도시의 개수를 나타내는 정수 N(2 ≤ N ≤ 100,000)이 주어진다.
// 다음 줄에는 인접한 두 도시를 연결하는 도로의 길이가 제일 왼쪽 도로부터 N-1개의 자연수로 주어진다.
// 다음 줄에는 주유소의 리터당 가격이 제일 왼쪽 도시부터 순서대로 N개의 자연수로 주어진다.
// 제일 왼쪽 도시부터 제일 오른쪽 도시까지의 거리는 1이상 1,000,000,000 이하의 자연수이다.
// 리터당 가격은 1 이상 1,000,000,000 이하의 자연수이다.
// 표준 출력으로 제일 왼쪽 도시에서 제일 오른쪽 도시로 가는 최소 비용을 출력한다.

/*
* 4
* 2 3 1
* 5 2 4 1
* */
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const distance = input[1].split(" ").map(v => BigInt(v));
const price = input[2].split(" ").map(v => BigInt(v));

let curPrice = price[0];
let answer = 0n;

for (let i = 0; i < n - 1; i++) {
    if (price[i] < curPrice) {
        curPrice = price[i];
    }
    answer += curPrice * distance[i];
}
console.log(String(answer));

// test code
console.log(colors.bgWhite.black(String(answer)));
