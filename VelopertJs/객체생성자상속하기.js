// 객체 생성자 만들기
function Animal( type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // 함수호출 계속해
    // this.say = function() {
    //     console.log(this.sound);
    // }
}

Animal.prototype.say = function() {
    console.log(this.sound);
}


Animal.prototype.sharedValue = 1;

const dog = new Animal('개','강쥐','멍멍!');
const cat = new Animal('고양이','양오이','야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);

//객체 생성자 상속하기
// 우선 상속을 받지 않으면 이렇게 계속해서 객체 생성자를 만들어주어야한다.
// function SmallCar( size, sound ) {
//     this.type = '소형';
//     this.size = size;
//     this.sound = sound;
// }

// function BigCar( size, sound ) {
//     this.type = '대형'
//     this.size = size;
//     this.sound = sound;
// }

// SmallCar.prototype.say = function() {
//     console.log(this.sound);
// }

// BigCar.prototype.say = function() {
//     console.log(this.sound);
// }

// const tico = new SmallCar('100inch','빙빙');
// const rangerover = new BigCar('1000inch','펑풍펑!');

// console.log(tico);

function Car( type, size, sound ) {
    this.type = type;
    this.size = size;
    this.sound = sound;
}

Car.prototype.say = function() {
    console.log(this.sound);
}

function SmallCar( size, sound ) {
    Car.call(this, '소형', size, sound);
} 

function BigCar( size, sound ) {
    Car.call(this, '대형', size, sound );
} 

SmallCar.prototype = Car.prototype;
BigCar.prototype = Car.prototype;

const tico = new SmallCar('100inch',붕붕);