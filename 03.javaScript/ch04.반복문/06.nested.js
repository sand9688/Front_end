// 별로 삼각형 그리기
for (let i=1; i<=5; i++){
    let stars = '';
    for (let k=1; k<=i; k++ ){
        stars +='*';
    }
    console.log(stars);
}

// 역으로 그리기

for (let i=5; i>=1; i--){
    let stars='';
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    console.log(stars);
}

// 2사분면
for (let i=1; i<=5; i++){
    let stars='';
    for (let m=4; m>=i; m--){
        stars+=' ';
        }
    for (let k=1; k<=i; k++){
            stars+='*';
        }
    console.log(stars);
    
}
// 3사분면
for (let i=5; i>=1; i--){
    let stars='';
    for (let m=0; m<5-i; m++){
        stars+=' ';
    }
    for (let k=1; k<=i; k++){
        stars += '*';
    }
    
    console.log(stars);
}