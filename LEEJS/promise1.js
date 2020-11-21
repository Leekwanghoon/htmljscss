/*
p라는 프로미스 객체는 1000ms 후에 fulfilled 된다
*/

new Promise((resolve,reject) => {
    /*pending 상태 */
    setTimeout(() => {
        resolve(); /* 1초 이후에 fulfilled상태로 넘어가버려*/
    }, 1000);
});