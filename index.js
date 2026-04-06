console.log('Welcome to ZERO KAATA')
// let stop = true;
let audioreset = new Audio("button.mp3");
let audioturn = new Audio("beep-329314.mp3");
let gameover = new Audio("level-up-05-326133.mp3");

let turn = "O"
let isgameover = false;

// function to change turn
const changeturn = () =>{
    return turn === "X"? "O":"X"
}

//WINNER
const checkwin = () =>{
    let boxtext = document.getElementsByClassName("boxtext")
    let winner = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15,0],
        [6, 7, 8, 5, 25,0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [2, 4, 6, 5, 15, -45],
        [0, 4, 8, 5, 15, 45],
]
    winner.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '') ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            console.log(isgameover)
            gameover.play();
            // stop = false
            document.querySelector('.gif').getElementsByTagName('img')[0].style.height = "200px";
            document.querySelector('.line').style.width = '20vw';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
        }
        
    })
}



//GAME LOGIC

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            if(!isgameover){
                boxtext.innerText = turn;
                turn = changeturn();
                audioturn.play();
            }
            checkwin();
        }
        if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn  For " + turn;
        }
    })    
})


reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = " "
    });
    turn = "O"
    isgameover = false;      
    console.log(isgameover)
    document.getElementsByClassName("info")[0].innerText = "Turn  For " + turn;
    audioreset.play();
    document.querySelector('.gif').getElementsByTagName('img')[0].style.height = "0px";
    document.querySelector('.line').style.width = '0vw';
    
})