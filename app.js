let boxes = document.querySelectorAll(".box");
let resetbtn  = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#New-btn");
let modalcontent = document.querySelector(".modal-content");
let mymodal = document.querySelector(".modal");
let msg = document.querySelector("#msg");
let closemodal = document.querySelector(".close")

let turnO = true; 
let clickcounts = 0;
let maxclicks = 9;

 mymodal.style.display = "none";

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

       if(turnO){
           box.innerText = "O"
           turnO = false;
       }
       else {
           box.innerText = "X"
           turnO = true;
       }
        box.disabled = true;

        clickcounts++;

        checkWinner();
    })
   });


   const checkWinner = ()=> {
    let winner = null;

    for(let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1 === posval2 && posval2 === posval3){
                winner = posval1;
                break;
            }
        }
        }
        if(winner){
            showmodal(`Congratulations . Winner is ${winner}`)
        }
        else if(clickcounts === maxclicks){
            msg.innerText = "It's a draw"
            mymodal.style.display = "block"
            disableboxes();
        }

    }; 

    const showmodal = (message) => {
        msg.innerText =message
        mymodal.style.display = "block"
        disableboxes();  
    }


    const disableboxes = () => {
        for (let box of boxes){
        box.disabled = true;
        }
    }

    const enableboxes = () => {
        for (let box of boxes) {
       box.disabled = false;
       box.innerText = "";
        }
    }

    const resetgame = () => {
        turnO = true;
        clickcounts = 0;
        enableboxes();
        mymodal.style.display = "none"
    }
    
newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);


closemodal.addEventListener("click",()=>{
    mymodal.style.display = "none";
    enableboxes();
})