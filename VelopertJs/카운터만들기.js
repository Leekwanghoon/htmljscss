//버튼을 누르면 숫자가 바뀌는 카운터 예제
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrase = document.getElementById('decrease');



// innerText : 내부텍스트보기
// offsetTop : 해당위치
// .id : id를 조회
// querySelectorAll : 태그로 찾음
increase.onclick = () => {
    const current = parseInt(number.innerText, 10) //10진수
    number.innerText = current + 1;
    console.log('increase가 클릭됨');
}

decrase.onclick = () => {
    const current = parseInt(number.innerText,10) //10진수
    number.innerText = current - 1;
    console.log('decrase가 클릭됨');
}