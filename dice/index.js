






var img1="1";
var img2="1";
function playGam(){
     img1=Math.floor(Math.random()*6+1);
     img2=Math.floor(Math.random()*6+1);

     document.querySelector(".p1").style.borderRadius="10px";
     document.querySelector(".p2").style.borderRadius="10px";
     document.querySelector(".p2").style.background="black";
     document.querySelector(".img1").setAttribute("src", "images/dice"+img1+".png" );
     document.querySelector(".img2").setAttribute("src", "images/dice" +img2+".png");

     document.querySelector(".p1").style.background="black";
     document.querySelector(".p2").style.background="black";
     if(img1>img2){
        document.querySelector("h1").innerHTML="Player 1 Win"
        document.querySelector(".p1").style.background="red";
     
    }
    else if(img2>img1){
    
        document.querySelector("h1").innerHTML="Player 2 Win"
        document.querySelector(".p2").style.background="red";
    }else{
        document.querySelector("h1").innerHTML="Player 1 Tie "
    
        
    
    }
    
   
  
}

document.getElementById("play").onclick=playGam;

