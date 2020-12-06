const clockDiv = document.querySelector("#clockDiv");

//시계를 html에 추가
function addClock(){
  let now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  clockDiv.innerHTML = `<h1 style="font-size:55px">${hour}:${minute}:${second}</h1>`;
}

setInterval(addClock, 1000);