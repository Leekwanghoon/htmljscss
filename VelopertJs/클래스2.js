//es6부터 클래스 생김
class Animal {
    //생성자(파라미터)
    constructor(type,name,sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name,sound);
    }
}

const cat = new Cat('고양이','야옹');
cat.say();
const cat2 = new Cat('야오오오옹이','야오오오오옹');
const dog = new Animal( '개','멍멍이','멍멍');
dog.say();


//ex2)

class Car {
    constructor(type,size,sound) {
        this.type = type;
        this.size = size;
        this.sound = sound;
    }
    say() {
        console.log(this.soudn) //이렇게 클래스 내부에 지정하면 자동으로 prototype으로 등록이 되어 공유가됨
    }
}

console.log(Car.prototype.say); //함수가 등록되어있음

 
class SmallCar extends Car {
    constructor( size, sound ) {
        super('소형', size, sound );
    }
}

class BigCar extends Car {
    constructor( size, sound ) {
        super('대형', size, sound);
    }
}
const rangeLover = new BigCar('200inch', '렌지렌지로버');
const sonata = new SmallCar('100inch','소나타소나타');

console.log(sonata);


//ex3
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name} 을 파는 음식점들:`);
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');


pizza.print();
chicken.print();