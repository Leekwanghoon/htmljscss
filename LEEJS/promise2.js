/*
p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행한다.
*/

const p = new Promise((resolve,reject) => {
    /*pending 상태 */
    setTimeout(() => {
        resolve(); /* 1초 이후에 fulfilled상태로 넘어가버려*/
    }, 1000);
});


p.then(/*callback*/)
