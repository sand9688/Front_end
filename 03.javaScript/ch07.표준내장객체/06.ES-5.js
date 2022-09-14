//ECMAScript-5(ES-5)에서 추가 된 array method

const fruits = ['apple', 'banana', 'cherry','grape'];

// 배열 순회 메소드
fruits.forEach(function(value, index){
    console.log(`인덱스${index}의 값은 ${value}`)
});
fruits.forEach(value => console.log(value));

// 배열의 각 요소에 대해서 함수 적용(map)
const numbers = [4,16,9,25,36]
numbers.sort();
let result  = numbers.map(x => Math.sqrt(x));
console.log(numbers);
console.log(result);

//배열에서 기준을 만족시키는 것만 추출
//20보다 큰 수만 추출
result = numbers.filter(value => value > 20);
console.log(result)