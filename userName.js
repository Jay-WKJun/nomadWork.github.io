//userName Persistance

const useNameDiv = document.querySelector("#userName");

function writeUserName(){
    const userName = localStorage.getItem("userName");
    const nameH3 = document.createElement("h3");
    nameH3.innerText = `Hello! ${userName}`
    useNameDiv.appendChild(nameH3);
}

if(localStorage.getItem("userName") === null) {
    localStorage.setItem("userName", "Jay");    
}

writeUserName();