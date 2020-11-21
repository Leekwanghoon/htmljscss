for( let i=0; i<10; i++) {
    console.log(i);
}
//0~9

for(let i=10; i>10; i--) {
    console.log(i);
}
//10~1
for(let i=10; i>=0; i-=2) {
    console.log(i)
}
//10 8 6 4 2 0

//for문과 배열

//멍멍이, 야옹이,멍뭉이

const names = ['멍멍이','야옹이','멍뭉이'];

for(let i=0; i < names.length; i++) {
    console.log(names[i]);
}

//while //언제가는 안의 조건문이 false가 되게끔 만들어
let i = 0;//특정조건일 때 사용 while
let isFun = false;
while(!isFun) { //isFun이 false일 때 반복
    console.log(i);
    i++;
    if(i===30) {
        isFun = true;
    }
}

// for of (주로 배열)
const numbers = [10,20,30,40,50];

for(let number of numbers) {
    console.log(number); //10,20,30,40,50
}

for(let i=0; i < numbers.length; i++) {
    console.log(numbers[i])
}

//map으로도 할 수 있엉

// 객체의 정보를 
const doggy = {
    name: '멍멍이', //key:value
    sound: '멍멍',
    age: 2
};

//key값가져오기
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));// ["name","sound","age"]
console.log(Object.values(doggy))//["멍멍이","멍멍",2]


//for in이 key값 가져오는 거랑 유사해
for( let key in doggy ) {
    console.log(`${key}: ${doggy[key]}`);
}


function sumOf(numberss) {
    let sum = 0;
    for( let i=0; i< numberss.length[i]; i++) {
        sum += numbers[i];
    }
    return sum;// 15
}
const result = sumOf([1,2,3,4,5]);
console.log(result);


function three(numbers) {
    // console.log(numbers);
    for(let i=0; i<numbers.length; i++) {
        console.log(numbers[i] ,':전');
        if(numbers[i] < 3 ) continue;
        console.log(numbers[i],':후');    
    }
}


console.log(three([1,2,3,4,5]));