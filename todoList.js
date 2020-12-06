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
    
    newTodoDiv = makeNewTodoDiv('yet', inputContent);

    inputTodo.value = "";

    notDoneList.appendChild(newTodoDiv);

    plusButton.style.display = "block";
    
}

//todo Div를 만들어 리턴함
function makeNewTodoDiv(divId, spanText, checked = false){
    const newTodoDiv = document.createElement("div");
    newTodoDiv.className = `todos ${divId}`;
    
    const todoListsArray = document.querySelectorAll(`.${divId}`).length;
    newTodoDiv.id = "todo" + todoListsArray.length;

    const newCheckBox = document.createElement("input");
    newCheckBox.type = "checkBox";
    newCheckBox.id = "checkBox";
    newCheckBox.checked = checked;
    newCheckBox.addEventListener('click', checkBoxEvent);

    const newSpan = document.createElement("span");
    newSpan.innerText = spanText;

    newTodoDiv.appendChild(newCheckBox);
    newTodoDiv.appendChild(newSpan);

    return newTodoDiv;
}

const checkBox = document.querySelectorAll('#checkBox');
checkBox.forEach( el => el.addEventListener('click', checkBoxEvent))

function checkBoxEvent(){
    const parentElement = this.parentElement

    if(this.checked){
        //클릭해서 체크되있으면 내리기
        newTodoDiv = makeNewTodoDiv('done', parentElement.children[1].innerText, true);
        //완료 todo에 똑같이 추가
        doneList.appendChild(newTodoDiv)
    }else{
        //체크가 풀려있으면 올리기
        newTodoDiv = makeNewTodoDiv('yet', parentElement.children[1].innerText, false);
        notDoneList.appendChild(newTodoDiv);
    }
    
    parentElement.remove();
};