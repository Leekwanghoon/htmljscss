/**
 * then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
 *  then 에 함수를 넣는 여러 방법을 확인해봅시다.
 */

 function p() {
     return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },1000)
     })
 }
 p()    //pending 상태
    .then(() => {
        return p(); //다시 새로운 Promise객체를 만들어서 리턴해부러
    })
    .then(() => p())    //arrow function return생략해부러   //2초후에 불려
    .then(() => p())    // 3초후에 불려
    .then(p)    
    .then(() => {       //이렇게하면 순차적으로 체이닝하면 callback지옥보다는 괜춘하고 만만춘하다!
        console.log('5000ms 후에 fulfilled된다');
    })