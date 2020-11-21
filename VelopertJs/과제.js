//안홰!
function three(numbers) {
    // console.log(numbers);
    for(let i=0; i<numbers.length; i++) {
        console.log(numbers[i]);
        const num = [];
        if(numbers[i] >= 3 )  {
            num1 = num.push([numbers[i]]);
            console.log(num1,":");            
        }
    }
    return num1;
}


console.log(three([1,2,3,4,5]));

//과제2
// 숫자배열이주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수

function countBiggerThanTen(numbers) {

}
const count = countBiggerThanTen([1,2,3,5,10,20,30]);
console.log(count)