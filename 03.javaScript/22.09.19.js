//문제 1 
function ans1(num1,num2) {
    let arr = [];
    if (num1 < num2){
        let x = num1;
        let y = num2;
        for (let i=x; i<=y; i+=3){
            arr.push(i);
        }
    }else{
        let x = num2;
        let y = num1;
        for (let i=x; i<=y; i+=3){
            arr.push(i);
        }
    }
    return arr;
};

console.log(ans1(2,10),ans1(12,3));

//문제 2
function ans2(birthday){
    let date = new Date()
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate()
    const a = birthday.substring(0,2) >= 23  ? Number('19'+birthday.substring(0,2)) : Number('20' + birthday.substring(0,2)) 
    const b = birthday.substring(2,4)
    const c = birthday.substring(4,7)
    if(Number(String(b)+String(c)) <= Number(String(month)+String(day))){
        return `만 나이는${year - a}살 입니다.`
    }else {
        return `만 나이는 ${year -a -1}살 입니다.`
    }
    
    
}
console.log(ans2('991003'),ans2('000919'));

//문제 3


//문제4
function ans4(x){
    const arr= x.split(';')
    arr.sort((a, b) => a - b).reverse();

    return arr
}

console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000'))

//문제 5
class Member{
    constructor(id,name,number,email){
        this.id = id;
        this.name = name;
        this.number = number;
        this.email = email;
    }
    toString(){
        return `[${this.name}의 정보 => id: ${this.id}  ${this.number} ${this.email}]`;
    }
}

james = new Member(01,'james','111-1111-1111','james@exaple.com')
maria = new Member(02,'maria','222-2222-2222','maria@exaple.com')

console.log(james.toString())
console.log(maria.toString())