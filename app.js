let gameseq=[];
let userseq=[];

let started =false;
let level =0;

let btns =["pink", "yellow", "green","blue"];
let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
   if(started==false){
     started=true;
        levelUp();
   }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
      btn.classList.remove("gameflash");
    }, 250);
  }


  function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    }, 280);
  }

function levelUp(){
    userseq=[];
let h2 = document.querySelector('h2');
level ++;
h2.innerText = `level  ${level}`;

let randomIdx = Math.floor(Math.random() * 3);
let randcolor = btns[randomIdx];
let randbtn =document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
gameFlash(randbtn);
}

function checkSeq(idx){
    
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length==gameseq.length){
           setTimeout(levelUp,280); 
        }
    }else{
        h2.innerHTML = `Game over!! Your score was ${level}. Press any key to start`;
        document.querySelector('body').style.backgroundColor= "red";
        setTimeout(function(){
          document.querySelector('body').style.backgroundColor= "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    userFlash(btn);

    checkSeq(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  started = false;
  gameseq =[];
  userseq =[];
  level = 0;
}