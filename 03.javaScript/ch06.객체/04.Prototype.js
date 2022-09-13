// Prototype -  엣날 javascript에서 제공하는 방법
// 권장하는 방법은 아님
// 객체를 찍어내는 틀(class)의 이름은 대문자로 시작한다.

function Person(name,age,gender) { // 생성자 함수
    this.name = name;
    this.gender =gender;
    this.age = age;
    Person.prototype.intro = function() { // 메소드
        console.log(`저는 ${this.name}이고 나이는 ${this.age}이며 ${this.gender} 입니다.`)
    }     
}
//객체의 인스턴스를 만드는 방법
james = new Person('제임스', 28, '남자');
maria = new Person('미라아', 28,'여자');

james.intro();
maria.intro();