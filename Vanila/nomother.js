// function sayHello(potato,number)) {        argument는 인자야  전달해주는 것이 필요해
//     console.log("안녕",potato,"야 그 감자 몇 개야?",number,"개야");      // 출력은 안녕 감자깡 감자깡을 인수로 넘겨버려~
// }

// sayHello(감자깡, 15)// 여러번 쓰기 귀찮으니까 function 만들면 존나 편해

// // 백틱
// function sayHello(name,age) {
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// sayHello("Nicolas",27);


// return 

// function sayHello(name,age) {
//     console.log(`Hello ${name} you are ${age} years old`);
// }

// const greetLee = sayHello("Lee", 15);       // greetLee는 sayHello("Lee",15)의 return 값이랑 같은거야 그래서 return 을 안해주면 바로 undefinded 나버린다 이거야~

// console.log(greetLee);


// // return 2
// function sayHello(name,age) {
//     return(`Hello ${name} you are ${age} years old`);
// }

// const greetLee = sayHello("Lee", 15);       // greetLee는 sayHello("Lee",15)의 return 값이랑 같은거야 그래서 return 을 안해주면 바로 undefinded 나버린다 이거야~

// console.log(greetLee);      //console.log는 객체야


//이제 우리만의 객체를 만들어보자 

// const calculator = {
//     plus: function(a,b) {
//         return a+b;
//     }
// }

// const plus = calculator.plus(5,5);  //calculator안에 있는 plus실행한 것의 반환값을 plus에 넣고 
// console.log(plus);          // 그 plus를 콘솔로 찍어버려~







// const nicoInfo = {
//     name:"이광훈",
//     age:27,
//     gender:"Male",
//     isHandssome:true
// }

// console.log(nicoInfo.name);

// const nicoInfo = {
//     name : "Nico",
//     age : 33,
//     gender: "Male",
//     favMovies: ["Along the gods","LOTR","OldBoy"],   //console.log(nicoInfo.favMovies[0])    //Along the gods
//     favFood: [       //console.log(nicoInfo.favFood[0].fatty) // false
//         {
//             name:"Kimchi",
//             fatty:false
//         },
//         {
//             name:"CheeseBugder",
//             fatty:true
//         }
//     ]
// }