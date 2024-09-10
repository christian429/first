const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const add = document.getElementById("add");


 add.addEventListener('click',  function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        li.setAttribute('class', 'list');
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = "";
 });

 listcontainer.addEventListener("click", function (event){
    const target = event.target;
    if(target.tagName === "LI"){
        target.classList.toggle("checked");
    }
    else if(target. tagName === "SPAN"){
        target.parentElement.remove();
    }
 },false )
 


    
 