let number = 273.1;

let num =  Number('273.1');

console.log(num === number);

//기본 자료 형  - 숫자 문자 부울리언(true, false)

// 객체 자료형
let obj = new Number(273.1);
console.log(typeof(number),typeof(num), typeof(obj)) // number, number, object

let pi = Math.PI;
console.log(pi);

console.log(pi.toExponential(), pi.toFixed(2), pi.toPrecision(6));

console.log(Number.MAX_VALUE, Number.MIN_VALUE); 


