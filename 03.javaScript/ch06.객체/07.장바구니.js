//Product 클래스를 정의할 것
//속성 -  이름, 가격, toString 메소드
// 5가지의 상품을 만들것
// Cart - 상품, 수량
// Cart의 총 각격을 구하세요( 메쏘드 add(), sum())


class Product {
    constructor(name,price){
        this.name = name
        this.price = price
    }
    toString(){
        return `${this.name}의 가격은 ${this.price}입니다.`
    }
}

class Cart {
    constructor(obj,num){
        this.obj = obj
        this.num = num
        this.cart=[]
    }
    add(){
        this.cart.push[this.cart.length] = [this.obj, this.num] 
        return `바구니에 ${this.obj.name}가 ${this.num}개가 추가 되었습니다.`
    }
    sum(){
        for (let i=0; i <= this.cart.length; i++){
            a=0
            a += this.cart[i].price *this.cart[i][1]
                        
        }
        return ` 총 계산 금액은 ${this.obj.price * this.num}입니다.`
    }
}

apple = new Product('사과',500);
orange = new Product('오렌지',800);
grape = new Product('포도',1000);
pear = new Product('배', 600);
pineapple = new Product('파인애플', 1100);
cart = new Cart(apple,3);


console.log(apple.price)
console.log(cart.add());
console.log(cart.sum());
