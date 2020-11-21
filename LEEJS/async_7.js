function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout({
            resolve(ms);
        }, ms);
    })
}

//Promise

// p(1000).then(() => p(1000).then(() => p(1000)).then(() => {
//     console.log('3000 ms 후에 실행');
// });

//async await

(async function main() {
    await p(1000);
    await p(1000);  //간단하다 Promise써도되고  //둘다 비동기 처리하는 거임
    await p(1000);
    console.log('3000ms 후에 실행');
})();