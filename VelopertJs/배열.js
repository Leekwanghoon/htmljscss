// 여러개의 항목이 들어있는 리스트
// 배열안의 모든원소들이 같은 형태일 필요 x
// []대괄호 {}중괄호 ()소괄호
const array = [1,2,3,4,5]
console.log(array);

const array1 = [1,'blalgl',{}, 4];
console.log(array[0]);
console.log(array[4]); //undefined;

const objects = [
    {
        name: '멍멍이'
    },
    {
        name:'야옹이'
    }
];

console.log(objects);
console.log(objects[0]); //Object {name:'멍멍이'}
console.log(objects[1]);

//배열의 새로운 항목 추가 push
objects.push({
    name:'멍뭉이'
});
console.log(objects);

//배열의 크기 알아내기
console.log(objects.length); //3


//얀숩 length
const ex = [1, true, {a:1}, [12,3,24,3,42,]];
array.push("시아");

console.log(ex.length);
