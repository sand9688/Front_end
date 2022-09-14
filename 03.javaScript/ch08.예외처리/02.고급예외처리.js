try{
    let array = new Array(-2000);
}catch(e){
    console.log(e.name);
    console.log(e.message);
}finally{
    console.log('장상처리와 예외처리 모든 경우에도 실행이 됨')
}

const error = new Error();
error.name = '내 마음대로 에러';
error.message = '오류 메세지';
try{
    throw error;
}catch(e){
    console.log(e.name);
    console.log(e.message);
}
let sum=0;
try{
    for (let i=0; i<10000; i++){
        for (let j=0;j<10000;j++){
            for (let k=0;k<10000;k++){
                sum +=i+j+k
                if (sum > 10000000){
                    throw error; //의도적으로 예외를 발생시켜 루프를 탈출함
                }
            }
        }
    }
}catch(e){

}finally{
    console.log('loop 탈출 성공');
}
