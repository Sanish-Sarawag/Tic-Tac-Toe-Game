let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".win");
let turn0 = true;

const WinPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame= () =>{
    turn0 = true;
    enablebox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
    msg.innerHTML= `Congratulation, Winner:${winner}`
    msgContainer.classList.remove("hide");
    disablebox();
} 
const checkWinner = () => {
    for (let pattern of WinPattern) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != "" ) {
            if(pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);

            }
        }
    }
}

resetbtn.addEventListener("click", resetGame);