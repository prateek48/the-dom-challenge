const start=document.getElementById("start");
start.addEventListener('click',startGame);

function startGame(){
    let score=0;
    let blinkedBoxes=[];
    let clickedBoxes=[];
    blink(1);
    const scoreDiv=document.getElementById("score");
    scoreDiv.innerHTML=`Score :${score}`
   
    const cards=document.querySelectorAll(".card");

    

    function handleClick(e)
    {
        e.target.dataset.num
    }
    cards.forEach(card => {
        console.log(card)
        card.addEventListener('click',(e)=>handleClick(e));
        
    });

    highlight()

}