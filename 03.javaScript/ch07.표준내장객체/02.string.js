let hello = '안녕하세요';
let helloFromConstructor = new String('안녕하세요');

//Methods

console.log(hello.charAt(1)); // hello[1]
console.log(hello.concat('여러분')); // hello + '여러분'
console.log(hello.indexOf('하'), hello.indexOf('한')) // 


//  문제
// 디지털 시계(00:00 ~ 23:59)가 있다.
// 디지털 시계 에서 3이라는 숫자가 있는 시간은 하루에 총 몇 초인가?
let a = 0;
for (let i = 0; i < 24; i++){
    for (let j = 0; j < 60; j++){
        let time = String(i) + ':'+ String(j)
        if (time.indexOf(3) >= 0 ){
            a += 60;
        }
    }
}

console.log(a);

// Reqular Expression(정규표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 over th lazy dog.';
let newStr = sample.replace(/[A-Z]/, ' '); // 대문자는 공백으로
console.log(newStr);

newStr = sample.replace(/r/g, 'R'); // r문자는 대문자로 g는 모든 문자열에 관하여
console.log(newStr)

newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); //한글을 제거
console.log(newStr)

// 문자열의 일부분을 추출
let str = 'Aplle, Banana, Kiwi';
console.log(str.slice(7, 13)); // Banana (시작 인덱스, 끝 인덱스)
console.log(str.slice(7)); // Banana, Kiwi (시작 인덱스) 
console.log(str.substring(7,13)) // Banana (시작 인덱스, 끝 인덱스)

// 문자열을 특정 문자열을 기준으로 배열로 만들기
const fruits = str.split(',');
console.log(fruits);

// 1 ~ 1000 0은 몇 번 나오고, 1은 몇 번, ....,9는 몇 번 나오는가?
let number = '';
for (let i=1; i<=1000; i++){
    number += String(i);
}
for (let j=0; j<=9; j++){
    let a = 0
    a += number.split(String(j)).length - 1
    console.log(`${j}의 갯수는 ${a} 입니다.`);
}
let obj = {};
for (let i=0; i<10; i++){
    obj[String(i)]=number.split(String(i)).length -1;
}
console.log(obj);