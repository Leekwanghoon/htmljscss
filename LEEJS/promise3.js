/*
p.then으로 callback 함수를 설정했기 때문에 fullfilled되면서 callback이 실행된다.
*/


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    },1000);
});

p.then(() => {
    console.log('1000ms 후에 fulfilled 됩니다.');   // setTimeOut에 의해 1초후에 p안에 then함수가 불리게 되는 것이다.
});

