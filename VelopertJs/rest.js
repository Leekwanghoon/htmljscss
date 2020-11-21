const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);

const aa = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const {...d} = aa;
console.log(d);

// 배열 rest
const numbers = [0,1,2,3,4,6,7,];
//배열에서의 rest는 맨 마지막에와야 한다.
const [one, two, ...res1t] = numbers;

console.log(one);
console.log(two);
console.log(res1t);

//함수 파라미터 rest

function sum(...rest) {
    return rest.reduce((acc,current) => acc + current,0)
}

const numbers = [1,2,34,5,6,66,7,8];
console.log(sum(...numbers));


//파라미터 인자차이
function subtract(x,y) {  //여기서 x,y는 파라미터: 함수에서 받아오는값
    return x-y;
}

const result = subtract(1,2);   //여기서 1,2는 인자 즉 함수호출시 들어가는거는 ㅇ니자네
console.log(result);