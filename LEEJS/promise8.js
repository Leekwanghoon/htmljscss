/*
보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장객체인 Error의 생성자를 이용하여 Error 개체를 만든다
*/

function p() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject( new Error('status 400!'));  //Error도 내장객체
        }, 1000);
    });
};

p()
    .then((message) => {
        console.log('1000ms후에 reject상태 돌입', message);     // resolve
    })
    .catch((reason) => {
        console.log('1000ms후에 reject상태 돌입', reason);      // reject
    })