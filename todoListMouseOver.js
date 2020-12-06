const todoList = document.querySelector("#todoList");

todoList.addEventListener("mouseover", todoListMouseOverEvent)
todoList.addEventListener("mouseout", todoListMouseOutEvent)

function todoListMouseOverEvent(){
    this.style.backgroundColor = "white";
}

function todoListMouseOutEvent(){
    this.style.backgroundColor = "";
}