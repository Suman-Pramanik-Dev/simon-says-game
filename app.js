let userSeq = [];
let gameSeq = [];
let btns = ["yellow","red","purple","green"];

let started = false;

let level = 0;



let heading3 = document.querySelector("h3");

let allBtns = document.querySelectorAll(".box");





document.querySelector("body").addEventListener("keypress", () => {
  if (started == false) {
    started = true;
  }

  levelUp();
});

let gameFlash = (btn) => {
  btn.classList.add("game-flash");

  setTimeout(() => {
    btn.classList.remove("game-flash");
  }, 250);
};

let userFlash = (btn) => {
  btn.classList.add("user-flash");

  setTimeout(() => {
    btn.classList.remove("user-flash");
  }, 250);
};

let checkAns = ((idx)=>{

  

  if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);

    }
  }else{
    heading3.innerHTML = `Game Over! <b>Your Score Was ${level}</b><br>Press Any Key To Start Again`;

   document.querySelector("body").style.backgroundColor ="red";
    
    gameReset();

    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor ="white";
    },250);
  }



})

let levelUp = () => {

  userSeq=[];
  level++;
  heading3.innerText = `Level ${level}`;



  //random button flash
  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randButton = document.querySelector(`.${randColor}`);

  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randButton);

 gameFlash(randButton);

 gameSeq.push(randColor);

 console.log(gameSeq);




  


};


function btnPressed(){

let btn = this;

userFlash(btn);

userColor = this.getAttribute("id");

userSeq.push(userColor);

console.log(userSeq);

checkAns(userSeq.length-1);

}

for(btn of allBtns){

  btn.addEventListener("click",btnPressed);
  
}

function gameReset(){
  started = false;
  userSeq =[];
  gameSeq = [];
  level =0;
 

  
}


