//객체 안에서 사용되는 함수를 메소드라고 한다
//객체: 속성(property, attribute) + 메소드(method)
// 속성 - 사물을 형용하는것
// 메쏘드 - 사물의 행동

const james = {
    name : '제임스' ,// 속성
    age : 28, 
    gender : '남자',
    intro : function() { // 메소드
        console.log(`저는 ${this.name}이고 나이는 ${this.age}이며 ${this.gender} 입니다.`)
    }    
};
const maria = {
    name : '마리아' ,
    age : 24, 
    gender : '여자',
    intro : function() { // 메소드
        console.log(`저는 ${this.name}이고 나이는 ${this.age}이며 ${this.gender} 입니다.`)
    } 
};



console.log(james);
james.intro();
console.log(maria);
maria.intro();

