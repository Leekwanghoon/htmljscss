function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function makeError() {
    await sleep(1000);
    const error = new Error();
    throw error;
}

async function catchError() {
    try {
        await makeError();
    } catch(e) {
        console.error(e);
    }
}
catchError();
// async함수 만들기
async function process() {
    console.log('안녕하세요!');
    //await으로 사용 promise객체를
    await sleep(1000); 
    console.log('반갑습니다');
    return true;
}
process().then(value => {
    console.log(value);
});

// async - 2