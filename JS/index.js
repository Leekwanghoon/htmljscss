function init() {
    //if
    const a = 10;
    if (a === 5) {
        console.log('5입니다');
    } else if (a === 10) {
        console.log('10입니다');
    } else {
        console.log('5도 아니고 10도 아닙니다')
    }
}
init();



function swcase() {
    const device = 'iphone';

    switch (device) {
        case 'iphone':
            console.log('아이폰');
            break;
        case 'ipad':
            console.log('아이패드');
            break;
        case 'galaxy note':
            console.log('갤럭시 노트!');
            break;
        default:
            console.log('모르겠네요..');
    }
}

swcase();

function fn() {
    const a = 1;
    const b = 2;
    const sum = a + b;
    console.log('sum :', sum);
    function add(a, b) {
        return a + b;
    }

    const fnsum = add(1, 2);
    console.log(fnsum)

    function hello(name) {
        console.log('Hello' + name + '!')
    }

    hello('이광훈');

    // 템플릿 리터럴을 사용하면 위의 hello를 이렇게도 받아올 수 있지
    function hi(name) {
        console.log(`Hi!, ${name}`);
    }
    hi('광훈');

}

fn()

function arrfn() {
    const add = (a, b) => a + b;
    console.log(add(1, 2));
}

arrfn();

//객체 : 우리가 변수 혹은 상수를 사용할 대 하나의 이름에
// 여러 종류의 값을 넣을 수 있게 해준다!

function object() {
    const dog = {
        name: '멍멍이',
        age: 2
    };
    console.log(dog.name);
    console.log(dog.age);

    const ironMan = {
        name: '토니 스타크',
        actor: '로버트 다우니 주니어',
        alias: '아이언맨'
    };

    const captainAmerica = {
        name: '스티븐 로저스',
        actor: '크리스 에반스',
        alias: '캡티 아메리카'
    };

    function print(hero) {
        const text = `${hero.alias}(${hero.name})역할을 맡은 배우는${hero.actor}입니다.`;
        console.log(text);
    }

    print(ironMan);

    const rice = {
        calorie: 111,
        time: 111,
        name: '현미'
    }
    const { calorie, time, name } = rice;
    function sprint({ calorie, text, name }) {
        const text1 = `${calorie}/${time}/${name}`;
        console.log(text1)
    }
    sprint(rice)
}

object();

//객체 안에 함수넣기
// function으로 선언한 함수는 this가 제대로 자신이 속한 객체를 가리킨다
// 하지만 화살표 함수는 그렇지않아서 error가 난다
function ObjInFn() {
    const dog = {
        name: '멍멍이',
        sound: '멍멍!',
        say: function say() {
            console.log(this.sound);
        }
        // say: () => {
        //     console.log(this.name);
        // }
    };
    dog.say();
}
ObjInFn();

//Getter함수 Setter함수

function GSetter() {
    const numbers = {
        a: 1,
        b: 2,
    };

    numbers.a = 5;
    console.log(numbers);   // 이렇게하면 a값이 변화한다.
}

GSetter();

// 배열

function arr() {
    const array = [1, 2, 3, 4, 5];

    const objects = [{
        name: '멍뭉이'
    },
    {
        name: '야웅이'
    }
    ]
    //push함수 사용하기
    objects.push({
        name: '야뭉인'
    })

    console.log(objects)
    console.log(objects.length)
}

arr();

//반복문
function forfor() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    const names= ['멍멍이','야퉁이','야옹이'];
    for( let i=0; i<names.length; i++) {
        console.log(names[i]);
    }

    //while

    let i = 0;
    while( i<10) {
        console.log(i);
        i++;
    }

    //객체의 정보를 얻어와보자
    const doggy = {
        name:'멍멍멍',
        sound:'야옹',
        age:2
    }
    console.log(Object.entries(doggy))
    console.log(Object.keys(doggy))
    console.log(Object.values(doggy))

    for( let key in doggy) {
        console.log(`${key}:${doggy[key]}`);
    }
}

forfor();

//배열 내장함수

//forEach : for문 대신 돌려버려

const superheroes = ['아이언맨','캡틴아메리카','토르','닥터 스트레인지'];

for( let i=0; i<superheroes.length; i++) {
    console.log(superheroes[i]);
}

superheroes.forEach(hero => {
    console.log(hero);
})  

//map : 배열안의 각 원소를 변환 할 때 사용되며, 이 과정에서 새로운 배열이 만들어진다

const aa = [1,2,3,4,5,6,7,8,9];

//aa 배열안에 새로운 배열을 만들고싶아면 어떻게할까?
//(1)
const squared = [];
for(let i=0; i<aa.length;i++) {
    squared.push(aa[i]*aa[i]);
}
console.log(squared)
//(2)
aa.forEach(n => {
    squared.push(n*n);
})
