//if else문
const array = [];
let text = '';
if( array.length === 0 ) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
console.log(text);
// 삼항 연산자   조건 ? 참(결과) : 트루(결과)
const array1 = [1,2,3];
let text1 = array1.length === 0 
    ? '배열이 비어있습니다' 
    : '배열이 비어있지 않습니다';

console.log(text1);

// 삼항연산자 여러번 쓰는거 가능한데 이런 경우 if-else가 더 간단해
const condition1 = false;
const condition2 = false;

const value = condition1 ? '와우!' : condition2 ? 'blahblah' : 'foo';
console.log(value);