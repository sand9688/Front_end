 const currentTime = new Date();
 
 if (currentTime.getHours() < 12) {
    console.log(`${currentTime.toLocaleString()}는 오전입니다.\n`)

 } else{
    console.log(`${currentTime.toLocaleString()}는 오후입니다.\n`)
 }

 //조건 연산자 ,3항 연산자
 const ampm= currentTime.getHours() <12 ? '오전 ' : '오후' ;
 console.log(`${currentTime.toLocaleString()}sms ${ampm}입니다.\n`)

 // 파이썬 :(a = 값1 if 조건 else 값2)  ==> JS (a = 조건 ? 값1 : 값2)
 