// 10보다 큰 정수를 입력으로 받아 모두 배열로 만들어서 추력하세요.

let int1=50;
let divisors = [];
for (let i=1; i<=int1; i++){
    if (int1 % i == 0){
        divisors.push(i);
    }
}
console.log(divisors);