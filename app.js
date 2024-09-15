let boxes = document.querySelectorAll(".box");
let resetbtn  = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
 box.addEventListener("click", () => {
    console.log("Box was clicked");
    if(turnO){
        box.innerText = "O"
        turnO = false;
    }
    else {
        box.innerText = "X"
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
 }) 
})

const showWinner = (winner) => {
    msg.innerText = `Congratulations . Winner is ${winner}`
    msgContainer.classList.remove("hide");
}

const checkWinner = ()=> {
    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("Winner",posval1);
                showWinner(posval1);
            }
        }
    }
}; 