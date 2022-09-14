let date = new Date()
console.log(date.toDateString()); //날짜,요일

console.log(date.toLocaleString()); // time zone 반영한 현재 시간 

// 22-09-14 09:16:xx
console.log(date.getMonth())
console.log(date.toISOString());
function myLocalTime(date){
    
    let year = String(date.getFullYear()).substring(2);
    let month = date.getMonth()+1 < 10 ? '0'+String(date.getMonth()+1):String(date.getMonth());
    let day = date.getDate() < 10 ? '0'+date.getDate():date.getDate()
    let hour = date.getHours() < 10 ? '0'+date.getHours():date.getHours();
    let min = date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds();
    return result = `${year}-${month}-${day}/ ${hour}:${min}:${sec}`;
}
console.log(myLocalTime(date));
console.log(typeof(myLocalTime(date))); //``안으로 들어간 출력은 String으로 나옴

// unix time
const unixDate = new Date(1.665e12);
console.log(unixDate.toLocaleString());

// 문자열로 생성
const strDate = new Date('2022-09-14 09:50:00');
console.log(myLocalTime(strDate));

// 시간 요소로 생성
const elementDate = new Date(2022,9-1,14,9,50);
console.log(myLocalTime(elementDate));

//시간 더하고 빼기
date.setDate(date.getDate() + 100);
console.log(myLocalTime(date));


//시간 간격
const examDay = new Date('2022-11-17');
today = new Date('2022-09-14');
const diff = examDay.getTime() - today.getTime();
const dDay= diff/(24 * 60 * 60 * 1000);
console.log(`오늘 수능 D-${dDay}`)