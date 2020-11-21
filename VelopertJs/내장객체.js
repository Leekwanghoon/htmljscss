//배열내장함수
const superheroes = [
    '아이언맨',
    '캡틴아메리카',
    '터르',
    '닥터스트레인지'
]

// const index = superheroes.indexOf('터르');//인덱스 값 찾기
// console.log(index);//2

// function print( title ) {
//     console.log(title);
// }
// superheroes.forEach(print);

// superheroes.forEach(function(hero) {
//     console.log(hero);
// })

superheroes.forEach(hero => {
    console.log(hero);
})

// superheroes.push([1,2,3,23],{a:1,b:2});
// console.log(superheroes);

const array = [1, 2, 3];

const squared = array.map(n => n * n);
console.log(squared);

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    },
];

const texts = items.map(item => item.text);
console.log(texts);


//객체인 경우
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 3,
        text: '배열 내장함수 배우기',
        done: false,
    }
]

//객체는 인덱스를 찾을 수 없어서 -1(일치하는 것이 없다)이 나온다.
// const index = todos.indexOf(3);
// console.log(index);

//indexOf 인덱스값찾기
// 배열안의 값이 객체이거나 특수한 조건에서 값을 찾을 때 findindex로찾아라

//findIndex : 인덱스를 반환
const index = todos.findIndex(todo => todo.id === 3)
console.log(index);

//find 찾은 값 자체를 반환
const todo = todos.find(todo => todo.id === 3)
console.log(todo);

// filter: 특정 조건을 만족하는 배열을 찾아서 다시 배열을 만들어
const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);


//splice 잘라버려, 기존의 배열을 건드려
const numberss = [10, 20, 30, 40];
const index12 = numberss.indexOf(30); //2
numberss.splice(index12, 1); // index2부터 1개 지우겠다
console.log(numberss);[10, 20, 40]

//sliced
const numbersss = [10, 20, 30, 40];
const sliced = numbersss.slice(0, 2)// 0번쨰 인덱스부터 
console.log(sliced); //10,20  
console.log(numbersss); //slice는 기존의 배열을 건드리지않아 

//shift : 첫번 째원소를 추출햄 , 하나씩 밖으로 꺼내
const value = numbersss.shift();
console.log(value, 'shift');

//pop: 얘는 마지막 원소부터 추출해서 하나씩 밖으로 빼
const popnum = [10, 20, 30, 40];
const value3 = popnum.pop();
popnum.pop();
popnum.pop();
console.log(value3);
console.log(popnum);

//unshift()  얘는 5를 맨 앞에 넣어줘 shift는 맨앞에 넣어줘 
const nunu = [10, 20, 30];
const a1 = nunu.unshift(0);
console.log(a1); //[0,10,20,30]
// push는 맨뒤에 넣어줘 pop는 맨뒤에 뺴줘

//concat: 여러개의 배열을 하나의 배열로 합쳐줘
const arr1 = [1, 23, 4];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2); //arr1에 arr2를 붙여
console.log(arr1);// 기존결과 수정 안한다
console.log(arr2); //기존결과 수정x
console.log(concated);

//spread  ...
const spreaded = [...arr1, ...arr2];
console.log(spreaded);

//join
const array4 = [1, 2, 3, 4, 5];
console.log(array4.join()); // 1,2,3,4,5
console.log(array4.join(' '));// 1 2 3 4 5 
console.log(array4.join('. '));// 1, 2, 3, 4, 5
console.log(array4.join('.....'));

//reduce : 주로 배열이 주어졌을 때 배열안의 값을 사용하여 연산할 때 사용
const nm = [1, 2, 3, 4, 5];
// let sum = 0;
// nm.forEach( n => {
//     sum += n;
// });
// console.log(sum);

//reduce는 위의 결과 1줄컷
// accumulator 함수, accumulator기본값을 넣어준다 reduce(acc, current)
const sum10 = nm.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum10);

// reduce이용하여 배열의 평균구하기
const reducesum = nm.reduce((accumulator, current, index, array) => {
    //마지막 값
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(reducesum);


//reduce다른예시 진짜 개꿀이다
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if (acc[current]) {/// acc[current] = a
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
}, {})
console.log(counts); //각각의 객체 몇개인지 세어준다