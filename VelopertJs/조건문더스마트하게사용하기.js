
const isCar = text => ['소나타', '페라리'].includes(text);
console.log(isCar('페라리'));

function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '너구리']
    return animals.includes(text); // 배열안에 포함되어있으면 true
    // return (
    //     text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    // );
}

console.log(isAnimal('개'));
console.log(isAnimal('노트북'));


// if가 너무나도 많음 1줄 줄여
function getSound(animal) {
    // key : value라는 객체를 만들어서 조회하면 편해
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    //sounds[animal]이 참이면 앞에만 출력 || 특성
    return sounds[animal] || '...?';
    //switch
    // switch (animal) {
    //     case '개':
    //         return '멍멍!';
    //     case '고양이':
    //         return '야옹!';

    //     case '참새':
    //         return '짹짹!';

    //     case '비둘기':
    //         return '구구!';
    //     default:
    //         return '...?'
    // }
    //if
    // if(animal === '개') return '멍멍!';
    // if(animal === '고양이') return '야옹~';
    // if(animal === '참새') return '짹짹';
    // if(anima === '비둘기') return '구구 구 구';
    // return '...?.';

}

console.log(getSound('개'));

function makeSound( animals ) {
    const tasks = {
        // 화살표함수
        개: () => {
            console.log('멍멍!');
        },
        // 최신 자바스크립트 형태
        고양이() {
            console.log('야옹!');
        },
        //익명함수
        비둘기: function() {
            console.log('구구 구 구');
        }
    }
    console.log(tasks[animals]);
    const task = tasks[animals];
    if( task ) {
        console.log('....?');
        return;
    }
}

makeSound('개');
makeSound('비둘기');