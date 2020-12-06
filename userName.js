//userName Persistance

const useNameDiv = document.querySelector("#userName");

function writeUserName(){
    let userName = localStorage.getItem("userName");
    if(userName === null){
        const inputName = prompt("Hi! What is your name?")
        localStorage.setItem("userName", inputName);
        userName = localStorage.getItem("userName");
    }
    const nameH3 = document.createElement("h1");
    nameH3.innerText = `Hello! ${userName}`
    nameH3.style.margin = "5px;"
    useNameDiv.appendChild(nameH3);
}

writeUserName();