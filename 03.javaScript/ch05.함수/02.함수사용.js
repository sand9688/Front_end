//약수를 찾아주는 함수
function getDivisors(num){
    let divisors=[];
    for(let i=1; i<num; i++){
        if( num%i ==0){
            divisors.push(i)
        }
    }
    return divisors;
}
// 어레이를 매개변수로 받아서 합을 반환하는 함수
function getSum(array){
    let sum=0;
    for(let div of array){
        sum += div;
    }
    return sum;
}


for (let i=2; i<=10000; i++){
    const array= getDivisors(i);
    const arrsum= getSum(array);
    if (arrsum == i ) {
        console.log(i),
        console.log(array.toString());
    }
}