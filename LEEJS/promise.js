//자바스크립트에서 함수가 끝났음에도 프로그램은 계속해서 실행되고 진행되어야 할 경우가 많이있다.
// 이런 비동기적 상황
// mdn의 promise

// es6부터 jS의 내장객체
//Promise
console.log(Promise);   // 전역 객체로 확인

/**
 * 생성자를 통해서 프로미스 객체를 만들 수 있습니다.
 * 생성자 인자로 executor 라는 함수를 이용합니다.
 */

 new Promise(/*executor*/);

 /*
 executor 함수는 resolve와 reject 를 인자로 가집니다.
    (resolve, reject) => {...}  //이것이 executor형태
    resolve와 reject는 함수입니다.
        resolve(), reject()
 */

new Promise(/* executor */ (resolve, reject) => {} );

/**
 * 생성자를 통해서 프로미스 객체를 만드는 순간 pending(대기) 상태가 된다.
 */

new Promise((resolve, reject) => {}); //pending

/**
 * executor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 된다.
 */

 new Promise((resolve,reject) => {
    //객체가 생성되므로 pending상태 돌입
    // ...비동기적인 처리
    //정상처리
    resolve();  //fulfilled 이행상태로 돌입 (정상처리후)
 })

 /**
  * executor함수 인자 중 하나인 reject 함수를 실행하면, rejected(거부) 상태가 된다
  */
 
  new Promise((resolve, reject) => {
      reject() //rejected
  });
