const secretCode=["basketball","tennis","Volleyball","football","boxing"];
let randomItem="";
let clicked=[];
let result="";
let mistake=0;

function selectrandomItem(){
    randomItem=secretCode[Math.floor(Math.random()*secretCode.length)];
    document.getElementById("lettes").addEventListener("click",buttonHandler);
    console.log(randomItem);
    window.addEventListener("keydown",keyHandler)
}

function setUnderscode(){  
    let splitWord=randomItem.split("");
    // console.log(splitWord);
    let mapWord=splitWord.map(letter=>(clicked.indexOf(letter))>=0?letter:"_")
    // console.log(mapWord)
    result=mapWord.join("");
    document.getElementById("clue").innerHTML=`<p>${result}</p>`;
}
function ckeckIfWon(){
    if(randomItem === result){
        document.querySelector(".imag").querySelector("img").src="assets/winner.png";
       
    }
}
function checkIfLost(){
    if(mistake===6){
        document.getElementById("clue").querySelector("p").innerHTML=`<p>Random word is : ${randomItem} </P>`
    }
}
function updatHangmanPicture(){
     const image=document.querySelector(".imag").querySelector("img");
     image.src=`assets/hangman${mistake}.png`
}
function letterHandler(letter){
    letter=letter.toLowerCase();
    clicked.indexOf(letter) ===-1 ? clicked.push(letter):null;
    document.getElementById(letter.toUpperCase()).id="used";
    if(randomItem.indexOf(letter) >= 0){
        setUnderscode();
        ckeckIfWon();

    }
    else if(randomItem.indexOf(letter)===-1){
        mistake++;
        checkIfLost();
        updatHangmanPicture();
    }
}

function buttonHandler(event){
    // console.log(event.target.id)
    letterHandler(event.target.id);
}
function keyHandler(event){
    letterHandler(event.key)
}

selectrandomItem();
setUnderscode();




