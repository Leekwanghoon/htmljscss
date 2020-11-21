//es6도입  spread 기존에 가지고 있던 정보 그대로 가져와
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const aa = {
    ...purpleCuteSlime,
    ...slime,
    ...cuteSlime
}
console.log(aa);
//배열 spread
const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);
//중간 삽입 쌉가능;
const numbers =  [1,2,3,4,5];
const spreadNumbers = [...numbers,1000,...numbers];

console.log(spreadNumbers);