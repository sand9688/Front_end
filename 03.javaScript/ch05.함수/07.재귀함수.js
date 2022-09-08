//재귀함수()
function factorial(n) {
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(`10!는 ${factorial(10)}입니다.`)


//fibonacci 수열
function fibo(n){
    if (n ==0 || n==1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}
for (let i=0; i<10; i++){
    console.log(fibo(i));
}