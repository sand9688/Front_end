class Person{
    constructor (name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString(){
        return `저는 ${this.name}이고 나이는 ${this.age}이며 ${this.gender} 입니다.`;
    }
}

class Student extends Person {

}

const student = new Student('홍길동', 25, '남자');
console.log(student.toString());

//Teacher 클래스 - Person  속성: 담당부서 추가,toString() 메쏘드 재정읜

class Teacher extends Person{
    constructor( name,age, gender, dept){
        super(name,age,gender);
        this.dept = dept;
    }
    toString(){
        return super.toString()+ `\n 담당반은${this.dept} 입니다.`
    }
}

const teacher = new Teacher ('마이클', 40, '남자', 'JS-B반')
console.log(teacher.toString());