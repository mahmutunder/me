var btn=document.getElementById("btn")
var output=document.getElementById("output");

let number = [Math.floor(Math.random()*100)];

btn.addEventListener("click", function(){
    let input = document.getElementById("userinput").value;
    if(input==number){
  
      output.innerHTML=  "You guessed right";
    }else if(input > number) {
        output.innerHTML="you guessed big";

    }else if(input<number){
        output.innerHTML="You guessed too small"
}
})