// 1 ~ 10 사이의 정수를 임의로 생성
let num = Math.ceil(Math.random() * 10);

if (num % 2 === 0) {
    console.log(`${num}은 짝수 입니다.\n`);
}

if (num % 2 === 1) {
    console.log(`${num}은 홀수 입니다.\n`);
}