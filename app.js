let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll("#resetbtn");
let newGamebtn = document.querySelector("#new")
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//playerX, player0

const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
       if(turn0){//player0
        box.innerText = "0";
        turn0 = false;
       } else {//playerX
        box.innerText = "X";
        turn0 = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () =>{
    for( let pattern of WinPattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos1Val!= "" && pos1Val != ""){
            if (pos1Val === pos2Val && pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




