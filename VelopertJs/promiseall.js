function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}

const getTurtlev = async () => {
    await sleep(3000);
    return '거북이';
}
// async function process() {
//     const dog = await getDog();
//     console.log(dog);
//     const rabbit = await getRabbit();
//     console.log(rabbit);
//     const turtle = await getTurtlev();
//     console.log(turtle);
// }

// 배열로 만들어 // promise all는 셋중 하나라도 에러발생시  / race는 가장빨리끝난게 에러
async function process() {//all 대신 race하면 가장빠른애가 나옴
    const results = await Promise.all[getDog(), getRabbit(), getTurtlev()]
    console.log(results);// ["멍멍이","토끼","거북이"] 가장오래걸린 3초걸림
}

process()