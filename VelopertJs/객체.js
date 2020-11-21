// 객체는 어떤 값을 선언할 떄 여러개의 값을 넣어준다.

const dogName = '멍멍이';
const dogAge = 2;

console.log(dogName);
console.log(dogAge);

const dog = {
    name: '멍멍이',
    age: 2,  // 이름 : 값  // key : value // "key with space" : 'asdf',
    cute: true,
    sample: {
        a:1,
        b:2,
    }
}

console.log(dog.name);
console.log(dog.age);
console.log(dog.sample.a);


const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};
//아이언맨 비구조할당
// const { name } = ironMan;요런식~

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴'
}

console.log(ironMan);
console.log(captainAmerica); //Object

function print(hero) {
    const text = `${hero.alias}/${hero.name}/${hero.actor}`
}

print(ironMan); //매개변수로 객체넘겨
print(captainAmerica);

// 비구조 할당 == 객체 문법 분해
// const {} = hero

const hong = {
    name: '홍유찬',
    age: 27,
    favoriteFood: {
        first : 'Ham',
        second : 'rice'
    }
}

const Lee = {
    name: '이광훈',
    age: 29,
    favoriteFood: {
        first: 'rice',
        second: 'ramyeon'
    }
}

// function print1(encore) {
//     const {name, age, favoriteFood} = encore;   //객체 내부에서
//     // 안에있는 값을 밖으로 빼온것!
//     const text = `${name}/${age}/${favoriteFood}`;
//     console.log(text);
// }
function print1({name, age, favoriteFood}) {
    // 안에있는 값을 밖으로 빼온것!
    const text = `${name}/${age}/${favoriteFood}`;
    console.log(text);
}


print1(Lee);

//객체 안에 함수넣기
// function 키워드의 this는 자기가 속한 곳을 가리키지만 화살표함수는 this객체 안만들어
const dog1 = {
    name: '강쥐',
    sound: '멍멍!',
    // say: function say() {
    //     console.log(this.sound);
    // }
    say: function() {
        console.log(this.sound);
    }
}

dog.say(); //멍멍

const cat = {
    name: '용이',
    sound: '야옹~'
};
// 함수 내부 this는 자신이 속한곳을 가리킨다!
cat.say = dog.say;
dog.say(); //멍멍
cat.say(); //현재 dog.say는 cat.say라고 했으므로 this.sound가 자신이 속한 cat= { 내부 sound를 가리킴} 그래서 야옹이 나옴


// getter(특정값을 조회 할 때), setter( 특정값을 바꿀때)  
const numbers = {
    a: 1,
    b: 2,
    //getter함수
    get sum() {
        console.log('sum 함수가 실행!');
        return this.a + this.b;
    }
};

// numbers.a = 5;
// console.log(numbers);
console.log(numbers.sum); // 3 함수를 sum()호출한 것이 아닌 조회한 것인데 나온당
numbers.b = 5;
console.log(numbers.sum); // 6

//setter
const dogg = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    //setter함수는 파라미터를 반드시 받아와, setter는 값과 함수명이 같으면 안되지만 getter는 값과 함수명이 같아도된다.
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
}
// getter로 조회시
// console.log(dog._name);//멍멍이
// dog.name = '뭉뭉이';
// console.log(dog._name);  //이름이 바뀝니다.. 뭉뭉이 

//getter조회시 dog._name => dog.name
console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

// getter setter 예제2

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum); //3
numbers.a = 5; // => set_a로가고  calculate값이 변함
// getter,setter는 값이 바뀔때만 호출되고 안바뀌면 기존의 것 사용
// getter,setter안 사용하면 조회 할 때마다 함수를 호출한다
//예시

const numbers2 = {
    a:1,
    b:2,
    get sum() {
        console.log('sum');
        return this.a + this.b;
    }
};

console.log(numbers2.sum); //sum
console.log(numbers2.sum); //sum
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum);
