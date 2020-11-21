// const title = document.getElementById("title");
// title.innerHTML = "hi From Js"
// title.style.color = 'red';
// document.title = "I Own you now"
// console.dir(document)

//console.dir(title);     //title로 할 수 있는 모든 것을 다 볼 수 있어


//title.innerHTML = "와우 이거 바뀐다";
// console.log(title);     //<h1 id="title">This Works</h1>
// console.error("fuck");  //error 도 만들 수 있어 개꿀

// querySelector는 노드의 첫번째 자식을 반환한다.

// const title = document.querySelector("#title");     //class .  id는 #

//Window

// function handleReSize() {

//     console.log("Reszie호춣!");
// }
// const title =  document.querySelector("#title");
// //window 는 submit을 제공하지않아 (왜냐면 window를 제출할 수는 없으니까)
// window.addEventListener("resize",handleReSize)       //이벤트 받기를 기다리고 있어 //윈도우사이즈가 변화할 때 handleResize함수가 호출!
//                                                 //           handleReSize()라고 하면 내가 호출 하지않아도 바로 호출되버린다


// //event : event를 다루는 함수를 만들때마다 JavaScript는 event에 객체를 붙인다.
// const title = document.querySelector("title");

// function handleReSize(event) {
//     console.log(event);
// }

// window.addEventListener("resize", handleReSize)


//Click 이벤트 발생

// const title = document.querySelector("#title");

// function handleClick() {
//     title.style.color = "red";
// }

// title.addEventListener("click",handleClick);

// //if-else
// if(condition) {
//     block
// } else {

//     block
// }
// if-else 1

// if(10>5) {
//     console.log("참참참")
// } else {
//     console.log("거짓거짓거짓")
// }

// if( 10 === 5) {
//     console.log("구라구라구라")
// } else{
//     console.log("ㅋㅋㅋ")
// }

// if( 10 === "10") { 
//     console.log("dskdajsk")
// } else {
//     console.log("ddsjsadklk")
// }



//prompt        이제 안써

// prompt("Ask Something to User")


// title 의 색깔이 같은지 판별후 변화할지 말지 할거임

// const title = document.querySelector("#title");

// const BaseColor = "red";
// const OtherColor = "blue";

// function handleClick() {
//     const currentColor = title.style.color;
//     if( currentColor === BaseColor ) {
//         title.style.color = OtherColor;
//     } else {
//         title.style.color = BaseColor;
//     }
// }


// function init() {
//     title.style.color = BaseColor;
//     title.addEventListener("click",handleClick);
// }

// init();

//https://developer.mozilla.org/ko/docs/Web/Events
// HTML 이벤트는 여기서 찾아봐 예를 들어 아래거
//offline 이벤트사용하기 navigator는 객체가 아님  윈도우쓰자

// function handleOffline() {
//     console.log('lalaal')
// }
// window.addEventListener("offline",handleOffline)

// 클릭시 클래스 바꾸기
// const title = document.querySelector("#title")

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const currentClass = title.className;
//     //console.log(currentClass);  현재 className은 비어있지 머야
//     if( currentClass !== CLICKED_CLASS) {
//         title.className = CLICKED_CLASS
//     } else {
//         title.className = "";
//     }
// }


// function init() {
//     title.addEventListener("click", handleClick)
// }

// init();


// classList는 메서드를 가진다 mdn가서 찾아봐 add,remove등

// const title = document.querySelector("#title")

// const CLICKED_CLASS = "clicked";

// function handleClick() {
    
//     const hasClass = title.classList.contains(CLICKED_CLASS)        //title.classList안에 CLICked_Class포함하면 T/f 로 반환할거임

//     // const currentClass = title.className;
//     //console.log(currentClass);  현재 className은 비어있지 머야
//     if( !hasClass) {
//         title.classList.add(CLICKED_CLASS)
//     } else {
//         title.classList.remove(CLICKED_CLASS);
//     }
// }


// function init() {
//     title.addEventListener("click", handleClick)
// }

// init();


//toggle

// const title = document.querySelector("#title")

// const CLICKED_CLASS = "clicked";

// function handleClick() {
//     title.classList.toggle(CLICKED_CLASS);   
// }


// function init() {
//     title.addEventListener("click", handleClick)
// }

// init();



