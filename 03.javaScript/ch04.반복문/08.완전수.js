//완전 수 구하기
// 10000 이하의 완전수를 구하시오
// 찾으려고 하는 모둔 수에 대해서
for (let i = 2; i<=10000;  i++){
    let array=[]
    //약수 찾기
    for (let m = 1;  m<=i;  m++){
        if (i%m == 0 ){
            array.push(m)
        }
    }

    //약수 합 구하기
    let sum=0;
    for (let div of array){
        sum += div;
    }
    //자기 자신과 같은지 확인
    if (sum-i == i){
        console.log(i);
        console.log(array.toString());
    }
}