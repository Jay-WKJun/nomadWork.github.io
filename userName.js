//userName Persistance

function writeUserName(){
    const nameH3 = document.createElement("h3");
    nameH3.innerText = localStorage.getItem("UserName");
    clockDiv.appendChild(nameH3);
}

if(localStorage.getItem("userName")) {
    
}else{
    localStorage.setItem("userName", "Jay");
}

writeUserName();