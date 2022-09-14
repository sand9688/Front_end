// array 생성
const cars = ['saab','volvo', 'bmw']
const persons = new Array('제임스','마리아');
console.log(cars, persons)

function reverseString(str){
    return str.split('').reverse().join('');
}
let rs = str =>str.split('').reverse().join('');
console.log(rs('기러기 스위스 토마토'))

//배열을 일부분을 리턴
const fruits = ['apple', 'banana', 'cherry','grape'];
console.log(fruits.slice(1,3));

//배열의 요소를 정렬 - 배열이 변함
console.log(cars);
cars.sort();
console.log(cars);

// 내림차순 정렬
const numbers = [45,67,35,97,82];
numbers.sort().reverse()
console.log(numbers);

// 배열의 일부분을 삭제해서 리턴 - 배열이 변함
const abFruits = fruits.splice(0,2);
console.log(abFruits,fruits)


// 배열의 map 메소드 함수 적용
let a = numbers.map(function(num) {
    return Math.sqrt(num);
})
console.log(a);
result = numbers.map( x =>  Math.sqrt(x));
console.log(result)




// 앞으로 해결해야 할 과제 -- callback함수 사용,method chaining
const objArray = [
    {name : '제임스', score : 80, math:75},
    {name : '마리아', score : 90, math:70},
    {name : '마이클', score : 70, math:80},
    {name : '아담', score : 60, math:90}
]

// 성적 순으로 정렬
// math와 score의 평균
// math 점수가 80점 이상인 사람