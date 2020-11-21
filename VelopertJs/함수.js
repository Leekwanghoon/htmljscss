//함수이름(매개변수)
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello(name) {
    console.log('Hello', + name + '!');
}
hello('광훈');

//es6 ECMA 에크마 es2015 const, let, template literal
//es7 ECMA 2016
//es8 2017
//es9   2018
//es10  2019
/*template literal*/
function hello1(name) {
    console.log(`hello${name}`);
}
hello1('이광훈');

function hello2(name) {
    return `helllo${name}`; //return 이 사용되는 순간 함수가 종료되! if문안에 써먹으면 return여러개 되겟지?
}

const result = hello('이광훈');
console.log(result);

function getGrade(score) {
    if(score === 100) {
        return 'A+';
    } else if( score >= 90) {
        return 'A';
    } else if( score === 89) {
        return 'B+';
    } else if( score >= 80) {
        return 'B';
    } else if( score === 79) {
        return 'C+';
    } else if( score >= 70) {
        return 'C';
    } else if( score === 69) {
        return 'D+';
    } else if( score >= 60) {
        return 'D';
    } else {
        return 'F';
    }

}

const grade = getGrade(100);
console.log(grade);


//화살표함수 const 시작
// this가 없어
const addd = (a,b) =>  {
    return a + b;
}
const sum = addd(1,2);
console.log(sum)

const hello3 = (name) => {
    console.log(`Helloe${name}`);
}
hello3('이광훈');

const adddd = (a,b) => a + b;

const sum1 = adddd(1,2);
console.log(sum);