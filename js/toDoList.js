const userTitle = document.querySelector("#userTitle");
const toDoForm = document.querySelector("#toDo-form");
const inputList = document.querySelector("#inputList");
const toDoList = document.querySelector("#toDoList");
const completedList = document.querySelector("#completed ul");

const TODOS_KEY = "todos";

let toDos = [];

function welcomeUser() {
    userTitle.innerText = `${localStorage.getItem("user")}'s To Do List`;
}

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function editToDo(event) {
    const currentList = event.target.parentElement;

    alert("Comming soon!");
}

function completedToDo(event) {
    // 완료 버튼의 부모요소인 li 찾기
    const succeedList = event.target.parentElement;

    if (event.target.checked) {
        // checked 상태 시 completed 로 이동
        completedList.appendChild(succeedList);
    } else {
        // checked 상태 아닐 시 onGoing 으로 이동
        toDoList.appendChild(succeedList);
    }

    console.log(event);
}

function deleteToDo(event) {
    // 삭제 버튼의 부모요소인 li 찾기
    const deleteList = event.target.parentElement;

    // li 요소 삭제
    deleteList.remove();

    // localstorage에서도 삭제된 li 요소와 같은 정보 삭제
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));

    // 새로운 to do list 배열로 저장
    saveToDo();
}

function addToDo(listContentsObj) {
    // li 요소 생성
    const li = document.createElement("li");
    // li에 각각 to do list 고유 ID와 같은 ID 부여
    li.id = listContentsObj.id;
    // to do list 내용을 넣은 span 요소 생성
    const newList = document.createElement("span");

    // to do list 완료 체크박스 input 요소 생성
    const completedBtn = document.createElement("input");
    completedBtn.setAttribute("type", "checkbox");
    // completedBtn.innerText = "V";
    // 완료 버튼 클릭 시 to do list 완료 실행
    completedBtn.addEventListener("click", completedToDo);

    // to do list 삭제 버튼 button 요소 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    // 삭제 버튼 클릭 시 to do list 삭제 실행
    deleteBtn.addEventListener("click", deleteToDo);

    // to do list 내용 수정 버튼 button 요소 생성
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏";
    // 수정 버튼 클릭 시 to do list 수정 실행
    editBtn.addEventListener("click", editToDo);

    // li 요소에 span 및 button 을 자식요소로 삽입
    li.appendChild(completedBtn);
    li.appendChild(newList);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // span에 to do list 내용 삽입
    newList.innerText = listContentsObj.text;

    // 기존 ul에 추가된 li요소를 자식요소로 삽입
    toDoList.appendChild(li);
}

function submitToDo(event) {
    event.preventDefault();

    if (event.target[0].value) {
        // input 안에 내용이 있을 경우 실행

        // 사용자가 입력한 to do list 내용
        const listContents = event.target[0].value;
        // to do list에 고유 ID 부여하여 dictionary로 저장
        const listContentsObj = {
            text: listContents,
            id: Date.now(),
        };

        // to do list 내용 출력
        addToDo(listContentsObj);

        // localstorage에 저장하기 위해 배열에 내용 추가
        toDos.push(listContentsObj);

        // localstorage에 to do lists 저장
        saveToDo();

        // input 창 비우기
        inputList.value = "";
    } else {
        // input 안에 아무 내용도 없을 시
        alert("Please write contents!");
    }
}

// submit 시 실행
toDoForm.addEventListener("submit", submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addToDo);
}

welcomeUser();
