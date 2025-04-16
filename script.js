let gameSeq=[];
let userSeq=[];

let btns=["red","purple","green","yellow"];
let started= false;
let level=0;

let h2= document.querySelector("h2");
document.addEventListener("keypress", function (){
    if(started==false){
        console.log("game started");
        started= true;

        levelUp();
    }
});

// let startBtn = document.getElementById("start-btn");

// startBtn.addEventListener("click", function () {
//     if (started == false) {
//         console.log("game started");
//         started = true;
        
//         // startBtn.style.display = "none";
//         // levelUp();
//     }
// });

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },80);
}

function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },200);
}

function levelUp(){
    userSeq=[];
    level++;
   h2.innerText = `Level ${level}`;

   let randIdx= Math.floor(Math.random()*4);
   let randColor= btns[randIdx];
   let randBtn= document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
gameSeq.push(randColor);
    console.log(gameSeq);
   gameFlash(randBtn);
}

function checkAns(idx){
//    console.log("curr level : ",level); 
// let idx = level -1;

if(userSeq[idx]===gameSeq[idx]){
    // console.log("same value");
    if(userSeq.length===gameSeq.length){
    setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to Restart`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
       document.querySelector("body").style.backgroundColor="white";
   },400);
    reset();

}
   
}
function btnpress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress);
      
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;

    // startBtn.style.display = "block";
    
}
