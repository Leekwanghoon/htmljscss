const object = { a:1};

// function print({ a,b }) {
//     console.log(a);
//     console.log(b || 2); // || 뒤 출력 
// }

// print(object);

//위에 것보다는 미리 지정이 정석
const {a, b = 2 } = object;
console.log(a);
console.log(b);

const animal = {
    name: '멍멍이',
    type: '개'
};
//비구조 할당으로 기존 이름 바꾸기
const {name: nickname} = animal;
// const nickname = animal.name;

console.log(nickname);

//배열 비구조할당
const array = [1];
// const one  = array[0];
// const two = array[1];

const [one, two=2] = array;

console.log(one);
console.log(two);

const array1 = [1,2,3,5];
const [one1,two2,three3,four4, five=5] = array1;
console.log(one1);

const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean','english','chinese']
        }
    },
    value: 5
}
// 여러번에 걸쳐서 빼오기
// const { name, languages } = deepObject.state.information
// const { value } = deepObject;

//비구조할당 한번에 빼오기
const {
    state: {
        information: {
            name,languages: [firstLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    name, // name: name
    firstLang, secondLang,
    value
}

console.log(extracted);