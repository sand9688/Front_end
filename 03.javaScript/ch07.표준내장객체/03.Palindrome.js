//Palindrome
// 세자리 정수 두개를 곱한 결과가 palindrome이면, 
// 가장 큰 수의 두개 정수를 찾아 보자

// 1) 문자을 뒤집는 함수
function reverseString(str){
    let result='';
    for (let i=str.length-1; i>=0; i--){
        result += str[i];
    }
    return result;
}

//2) 주어진 문자열이 palindrome 인지 확인하는 함수
function isPlindrome(str){
   return str == reverseString(str);
}

console.log(isPlindrome('기러기'), isPlindrome('맘머스'))

//3) 배열에서 가장 큰 수와 그것의 인덱스 구하기
const array = [3, 98, 27,51, 46];
// 최대값을 임의로 선정, 제일 첫번째원소
let maxVal = array[0]; //maxVal = Number.MIN_SAFE_INTEGER
let maxId = 0; // maxID = -1

for (let i=1; i<array.length; i++){
    if (array[i] > maxVal){
        maxVal = array[i];
        maxId = i;
    }
}
console.log(maxId,maxVal);
let maxVAL = 0
let maxIDs =[];
for (let i=100; i<=999; i++){
    for(let j=100; j<=999; j++){
        let X=String(i*j)
        if (X == reverseString(X)){
            if (maxVAL < i*j){
                maxVAL = i*j
                maxIDs = [i,j]
            }
        }

    }
}

console.log(maxVAL, maxIDs); //[913,993],906609