/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.race를 실행하며느,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve인자값을 돌려줘부러
*/

function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);
        },ms);
    })
}

Promise.race([p(1000),p(3000),p(2000)]).then(message => {
    console.log('가장 빠른 fulfilled 된 이후에 실행', message);
})      //가장 빠른 p(1000)반환