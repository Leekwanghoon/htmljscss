// async function
// async function 함수이름 () {}
// const 함수이름 = async () => {}
// 프로미스를 기반으로 합니다


// Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms);        //then에 callback으로 넘길때 ms로 넘겨부러
        },ms)
    })
}

//promise 객체를 이용해서 비동기 로직을 수ㅠ행할때

p(1000).then((msg) => {
    console.log(`${msg} ms 후에 실행된다`)
})


// Promise 객체를 턴하는 함수를 await로 호출하는 방법

const ms = await p(1000);  //정상적으로 끝나면 ms가 return값으로 가부러
console.log(`${ms} ms 후에 실행`);  // await is only valid in async function