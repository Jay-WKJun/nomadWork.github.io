//todo 만들기 = todo의 가장 아래 +버튼 만들고
//누르면 간단하게 할일 입력 (placeholder로 할일 입력!)
//옆에 체크두고 누르면 할일 로 추가 시킴

//체크박스 누르면 밑에 comlete로 추가됨,
//해제하면 다시 추가됨

const notDoneList = document.querySelector('#notDoneList');
const doneList = document.querySelector('#doneList')

const plusButton = document.querySelector("#plusButton")
plusButton.addEventListener('click', clickPlus);

const inputTodo = document.querySelector("#inputTodo");

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', addTodo);

function clickPlus(){
    plusButton.style.display = "none";
    inputTodo.style.display="inline-block";
    submitButton.style.display="inline-block";
}

function addTodo(){
    const inputContent = inputTodo.value;
    inputTodo.style.display="none";
    submitButton.style.display="none";
    
    const newTodoDiv = document.createElement("div");
    newTodoDiv.className = "todos yet";
    
    const todoListsArray = document.querySelectorAll(".yet").length;
    newTodoDiv.id = "todo" + todoListsArray.length;

    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkBox";
    newCheckBox.id = "checkBox";

    const newSpan = document.createElement("span");
    newSpan.innerText = inputContent;

    newTodoDiv.appendChild(newCheckBox);
    newTodoDiv.appendChild(newSpan);

    inputTodo.value = "";

    notDoneList.appendChild(newTodoDiv);

    plusButton.style.display = "block";
    
}



const checkBox = document.querySelectorAll('#checkBox');
checkBox.forEach( el => el.addEventListener('click', checkBoxEvent))
checkBox[0].lastChild.innerText
function checkBoxEvent(){
    const parentElement = this.parentElement

    console.log(parentElement.lastChild.innerHTML)


    /*
    const newTodoDiv = document.createElement("div");
    newTodoDiv.className = "todos done";
    
    const todoListsArray = document.querySelectorAll(".done").length;
    newTodoDiv.id = "todo" + todoListsArray.length;

    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkBox";
    newCheckBox.id = "checkBox";

    const newSpan = document.createElement("span");
    newSpan.innerText = inputContent;

    newTodoDiv.appendChild(newCheckBox);
    newTodoDiv.appendChild(newSpan);
    */



    //완료 todo에 똑같이 추가
    doneList.appendChild(parentElement)

    parentElement.remove();
    /*
    if(this.checked){
        console.log(this.checked)
    }else{

    }
    */
};