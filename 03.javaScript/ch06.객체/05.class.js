// 클래스를 사용하서 객체를 찍어내는 틀 만들기

class Person{
    constructor (name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

james = new Person('제임스', 28, '남자');

console.log(james)