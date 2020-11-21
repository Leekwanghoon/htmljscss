/*
value 가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다..
    value가 프로미스 객체면, resolve된 then 메서드를 실행합니다.
    value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행합니다.
*/
Promise.resolve(/* value */);

Promise.resolve(new Promise(( resolve,reject ) => {
    setTimeout(() => {
        resolve();
    }, 1000);
})).then((data) => {  //resolve된후에 then이 바로불려부러
    console.log('프로미스 객체인 경우, resolve된 결과를 받아 then이 실행됩니다.'
        , data);
});

Promise.resolve('bar').then(data => {
    console.log('then 메서드가 없는 경우 fullfilled 됩니다.', data);
})