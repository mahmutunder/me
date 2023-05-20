var btn=document.getElementById("btn");


btn.addEventListener("click", function(){
    var word=document.getElementById("word").value;
    var output=document.getElementById("output");
    output.innerHTML=word.length;

  
    
})

var cont=document.getElementById("container");
var cont1=document.getElementById("container1");
function regular(){
    cont.style.marginTop="0%"

cont.style.transform="scale(1)"
cont1.style.marginTop="0%";



}
function middle(){
    cont.style.marginTop="10%"

cont.style.transform="scale(2)"
cont1.style.marginTop="10%";



}
function big(){
    cont.style.marginTop="15%"

cont.style.transform="scale(3)"
cont1.style.marginTop="15%";



}