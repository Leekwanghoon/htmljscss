//Short-circuit evaluation
const dog = {
    name: '멍멍이'
};

function getName(animal) {
    if(animal) {
        return animal.name;
    }
    return undefined;
}

const name = getName();
console.log(name);


//앞의 결과물이 true이면 뒤의 결과물이 출력된다  거짓은 앞에거 참이면 뒤에거 출력
console.log(true && 'hello'); // hello
console.log( false && 'hello'); //fasle
console.log('hello' && 'bye'); //bye
console.log(null && 'hello') // null은 falsy 거짓 앞에 거나와


// 특정값이 유효할 때만 어떤 값을 조회할 때만 사용
const obejct12 = null;
// const object = { name: '이광훈'}
const name2 = obejct12 && obejct12.name;
console.log(name2) //null

// or 는 앞이 참이면 앞의 결과물이 출력됨
console.log(false || 'hello');
console.log('' || '이름없다');
console.log( null || null );

console.log('와아' || '여기안봐요');