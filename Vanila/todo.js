const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),     //태크
    toDoList = document.querySelector(".js-toDoList")

const TODOS_Ls = 'toDos'

let toDos = [];

// function filterFn(toDo) {
//     return toDo.id === 1
// }

function deleteToDo(event) {
    // console.log(event.target);
    // console.dir(event.target);      //parentnode를 찾아 // 누가 부모인지 알아서 해당부분을 없애기 위해서
    // console.log(event.target.parentNode)
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li)
    // const cleanToDos = toDos.filter(filterFn);      //filter는 true인 애들로만 가지고 새로운 array를 만든다 // toDo.id===1인애들로 다시 toDos를 만들어 cleantoDos에 넣는다
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);     //li.id 는 "1"이고 toDo.id는 1이다
    })
    console.log("cleanToDos : ",cleanToDos);
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_Ls,JSON.stringify(toDos));
}

function paintToDo(text) {
    // console.log(text)
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.value="X";
    delBtn.addEventListener("click",deleteToDo)
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    // console.log(toDos)
    const toDoObj = {
        text: text,
        id: newId     //비어있으므로 1을 더하자        // ex const a = [1,2,3,4] // a.length = 4  if( null) ㅡ> undefined
    }
    toDos.push(toDoObj);    // 비어있는것에 toDoObj를 밀어넣자
    saveToDos();        //push한 이후에 저장해야함 안그러면 데이터 비어있어서 안나옴 ㅎㅇㅇ
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

// function something(toDo) {
//     console.log(toDo.text);
// } 

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_Ls)
    if(loadedToDos !== null) {
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);  //parsedToDos는 현재 객체야
        parsedToDos.forEach(function(toDo) {
            // console.log(todo.text)
            // console.log(todo.id);
            paintToDo(toDo.text);
        })
        // parsedToDos.forEach(something);

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit)
}

init();