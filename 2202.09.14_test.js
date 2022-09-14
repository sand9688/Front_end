// 1번째 문제
const num = Math.ceil((Math.random() * 9)+1);
const num2 = Math.ceil((Math.random() * 20)+10);
function First(num,num2){
    const fristarray = [];
    if (num + 4 <= num2){
        for(let i=num; i<= num2; i++){
            if ( i == num+1 || i == num2-1) {
                //pass;
            }else{
                fristarray.push(`2**${i}`)
            }

        }
    }else{
        First(num,num2);
    }
    return fristarray;
}
console.log('1번째 정답:',First(num,num2),num,num2);

//2번째 문제
const text = `
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, 
and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career 
as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. 
Grown-ups never understand anything by themselves, and it is tiresome for children to be always and 
forever explaining things to the.`;
const str = text.split(' ')
const newstr=[];
let conut = 0;
for (let i of str){
    newstr.push(i.replace(/[^a-zA-Z]/g, ''))
}
for (let j of newstr){
    if ( j == 'the'){
        conut += 1;
    }
}
console.log('2번째 정답:', conut);


// 3번째 문제
const num3 = Math.ceil((Math.random() * 89)+10);
const num4 = Math.ceil((Math.random() * 89)+10);
function Three(num3,num4){
    const numbers=[];
    const numbers2 = [];
    const result =[];
    for (let i=1; i<=num3; i++){
        if (num3 % i == 0){
            numbers.push(i);
        }
    }
    for (let j=1; j<=num4; j++){
        if (num4 % j == 0){
            numbers2.push(j);
        }
    }
    for (let number1 of numbers){
        // result.push(numbers2.filter(number => number == i ));
        for (let number2 of numbers2){
            if ( number2 == number1 ){
                result.push(number2);
            }
        }
    }
    return result
}

console.log('3번째 정답 : ',Three(num3,num4), num3,num4);

//4번째 정답
const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];

const manufacturer = cars.map(x => x.split(' ')[0]);
const model = cars.map(x => x.split(' ').slice(1).join(' '));

console.log('4번째 정답: \n', '제조사 배열 : ',manufacturer ,'\n', '모델명 배열 :', model);
