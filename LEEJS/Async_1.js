// await를 사용하는 경우, 항상 async함수 안에서 사용되어야한다.

function p(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(ms)
        }, ms);
    })
}


(async function main() {
    const ms = await p(1000);
    console.log(`${ms}ms 후에 실행된다`);
})();