
alert("to add list use \"+\", to delete from list use doubleClick");

var addtodobutton=document.getElementById("addToDo");
var todolist=document.getElementById("todolist");
var todo=document.getElementById("todo");

addtodobutton.addEventListener("click", function(){
    
    
    var paragraf=document.createElement("p");
    paragraf.classList.add("parag")
    paragraf.innerText=todo.value;
    todolist.appendChild(paragraf);
    todo.value="";
    paragraf.addEventListener("click", function(){
        paragraf.style.textDecoration="line-through";
        paragraf.style.textDecorationColor="red";
        paragraf.style.backgroundColor="rgba(125,100,0,0.7)"
        paragrafstyle.width="200px"
        paragraf.style.textAlign="center";
    })
    paragraf.addEventListener("dblclick", function(){
        //todolist.removeChild(paragraf);
        paragraf.remove(paragraf)
    })
})