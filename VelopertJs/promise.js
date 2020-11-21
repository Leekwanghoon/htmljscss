//promise는 라이브러리에서 es6의 Js로 변화
// callback지옥탈출
//ex1)
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if( callback ) {
            callback(increased);
        }
    }, 1000)
}

//callback 지옥
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('작업 끝!');
                })
            })
        })
    })
})

//promise
const myPromise = new Promise((resolve, reject) => {
    //성공 resolve-then, 실패 reject- catch
    setTimeout(() => {
        resolve('result');
        reject(new Error());
    }, 1000)
})

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})

// promise-2
function increaseAndPrint1(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if(value === 5) {
                const error = new Error();
                error.name = 'ValueFiveError'; //에러이름 지정
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    })
}

// increaseAndPrint1(0).then(n => {
//     return increaseAndPrint1(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint1(n);
// }).then(n => {
//     return increaseAndPrint1(n);
// }).then(n => {
//     return increaseAndPrint1(n);
// }).catch(e => {
//     console.error(e);
// })

increaseAndPrint1(0).then(increaseAndPrint1)
.then(increaseAndPrint1)
.then(increaseAndPrint1)
.then(increaseAndPrint1)
.then(increaseAndPrint1)
.catch(e => {
    console.error(e);
})