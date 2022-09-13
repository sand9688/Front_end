const maria = {name : '마리아' ,age : 24, gender : '여자'};
const james = {name : '제임스' ,age : 28, gender : '남자'};

// for 반목문에서 in을 사용해야 함
for (let key in maria){
    console.log(key,maria[key]);
};

const persons = [maria, james]
for (let person of persons){ //persons는 배열 이므로 for ... of
    for (let key in person){ // person은 객체 이므로 for ... in
        console.log(key,person[key]);
    }
};
console.clear();
console.log(persons, typeof(persons)); //array 객체

// 외부와 데이터를 주고 받는 경우
const externalForm= JSON.stringify(persons);
console.log(externalForm);
