// async function 에서 return 되는 값은
// Promise.resolve 함수로 감싸서 리턴된다..


function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('reason'))
            // resolve(ms);
        }, ms);
    });
}


async function asyncP() {
    const ms = await p(1000);   // p를 찾아 떠나고 error를 조져부러  //아니면 1초뒤에 mark가 나와부러 시간차 공격해부러!
    return 'Makr' + ms;     // Makr 1000해부러
}

(async function main() {
    try {
        const name = await asyncP();
        console.log( name );    
    } catch( error ) {
        console.log(error);
    } 
})();