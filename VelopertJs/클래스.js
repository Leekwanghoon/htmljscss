//객체 생성자: 함수를 통해서 새로운 객체를 만들고 그리고 그 안의 넣고싶은 값 또는 새로운 함수를 넣게해준다
//객체생성자 만들때는 대문자로 만든다
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    //say를 밖으로 꺼내서 재사용
    this.say = function() {
        console.log(this.sound);
    }
}

//객체생성자를 사용해서 새로운 객체를 만들때에는 new라는 함수
const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

// say를 밖으로 꺼내서 재사용하는법

function Insect(type,name,sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Insect.prototype.say = function() {
    console.log(this.sound);
}
Insect.prototype.aaa = "2";

//위의 의미는 아래처럼 모든 Insect로 만들어진 함수들한테 공통된 함수를 가지게하자 라는의미
// function say() {
//     console.log(this.sound);
// }
// dog.say = say;
// cat.say = say;

const Jamzari = new Insect('잠자리','잠자리리리','리리리리리');
console.log(Jamzari.aaa); //위의 prototype으로 지정한 값이 이 객체안에 있당
const maemi = new Insect('매미', '김동현','맴매매매매매매매맴');

