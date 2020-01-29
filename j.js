var numsquares=6;
var colors=generaterandomcolor(numsquares);
var squares=document.querySelectorAll(".square");
var pickcolor=pickedcolor();
var colordisplay=document.getElementById("colordisplay");
var resetbutton=document.querySelector("#more");
var h1=document.querySelector("h1");
var messagedisplay=document.getElementById("message");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
easybtn.addEventListener("click",function(){
 hardbtn.classList.remove("selected");
 easybtn.classList.add("selected");
 numsquares=3;
 colors=generaterandomcolor(numsquares);
 pickcolor=pickedcolor();
 colordisplay.textContent=pickcolor;
 for(var i=0;i<squares.length;i++){
     if(colors[i]){
         squares[i].style.backgroundColor=colors[i];
     }
     else{
         squares[i].style.display="none";
     }
 }
});
hardbtn.addEventListener("click",function(){
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquares=6;
    colors=generaterandomcolor(numsquares);
    pickcolor=pickedcolor();
    colordisplay.textContent=pickcolor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor=colors[i];
          squares[i].style.display="block";
    }
   });
;resetbutton.addEventListener("click",function(){
    //change all new colors
    colors=generaterandomcolor(numsquares);
    //pick a new random color from the array
    pickcolor=pickedcolor();
    //change colordisplay to match the pickcolor 
    colordisplay.textContent=pickcolor;
    messagedisplay.textContent="";
    this.textContent="NEW COLORS";
    // change the colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    //change background of heading
    h1.style.backgroundColor="steelblue";

});
colordisplay.textContent=pickcolor;
for(var i=0;i<squares.length;i++){
    //add initial colors to the squares
    squares[i].style.backgroundColor=colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
       var clickedcolor= this.style.backgroundColor;
        if(clickedcolor===pickcolor){
            //display message correct if correct color is picked
            messagedisplay.textContent="Correct";
            // restart of game
            resetbutton.textContent="Play Again?";
            // change colors same as pickcolor
            changecolor(clickedcolor);
            //change heading
            h1.style.backgroundColor=pickcolor;
        }
        else{
            //change backgroumd to be same as 
            this.style.backgroundColor="#232323";
            messagedisplay.textContent="Try Again";
        }
    });
}
function changecolor(color){
    // change all colors
    for(var i=0;i<squares.length;i++){
        //change the background same as pickcolor
        squares[i].style.backgroundColor=color;
    }
}
function pickedcolor(){
    //pick a random color from the colors array
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolor(num){
    //make a new array
    var arr=[];
    // loop for adding colors
    for(var i=0;i<num;i++){
   // push color into array
        arr.push(randomcolor());

    }
    return arr;
}
function randomcolor(){
   // pick random number between 0-255 for"red"
    var r = Math.floor(Math.random() * 256);
      // pick random number between 0-255 for "green"
    var g = Math.floor(Math.random() * 256);
      // pick random number between 0-255 for "blue"
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}