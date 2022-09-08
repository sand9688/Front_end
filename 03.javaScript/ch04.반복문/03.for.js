// 1에서 100 까지 합
let sum = 0;
for (let i=1; i<=100; i++) {
    sum += i;
}
console.log(`1에서 100까지 정수합은 ${sum} 입니다.`);

// 1에서 100 까지 홀수 합
sum = 0;
for (let i=1; i<=100; i+=2) {
    sum += i;
}
console.log(`1에서 100까지 홀수합은 ${sum} 입니다.`);
// 1에서 100 까지 정수 합
sum = 0;
for (let i=2; i<=100; i+=2) {
    sum += i;
}
console.log(`1에서 100까지 짝수합은 ${sum} 입니다.`);
// 10! (factorial/)
let product = 1;
for (let i=1; i<=10; i++) {
    product *=i;
}
console.log(product)