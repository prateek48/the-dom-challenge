let score=document.getElementById("score");

let gridSize=4+Number(score.dataset.score);

const getRandomColors = function(){
    var ratio = 0.618033988749895;
    
    var hue = (Math.random() + ratio) % 1;
    var saturation = Math.round(Math.random() * 100) % 85;
    var lightness = Math.round(Math.random() * 100) % 85;

    var color = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + lightness + '%)';
    var oddColor = 'hsl(' + Math.round(360 * hue) + ',' + saturation + '%,' + (lightness + 5) + '%)';

    return {
        color,
        oddColor
    }
}



function handleClick(e,x,y)
{
    const row=e.target.dataset.row;
    const col=e.target.dataset.col;
    let colorGrid=document.getElementById("color-grid");
    if(row==x && col == y)
    {
        
        gridSize++;
        score.innerHTML=`Score: ${gridSize-4}`;
        createGrid(gridSize);
    }
    else {
        colorGrid.classList.add('shake')
        setTimeout(() => {
          colorGrid.classList.remove('shake')
        }, 500)}
}

function createGrid(gridSize)
{
    // console.log("Hi");
    let colorGrid=document.getElementById("color-grid");
    while (colorGrid.firstChild) {
        colorGrid.removeChild(colorGrid.lastChild);
      }
 let x=Math.floor(Math.random() * gridSize);
let y=Math.floor(Math.random() * gridSize);
const {color,oddColor}=getRandomColors();

    for(let i=0;i<gridSize;i++)
    {
        let gridRow=document.createElement("div");
        gridRow.classList.add("grid-row")
        for(let j=0;j<gridSize;j++)
        {
            let gridCol=document.createElement("div");
            gridCol.classList.add("grid-col");
            gridCol.dataset.row=i;
            gridCol.dataset.col=j;
            gridCol.style.backgroundColor=color;
            gridCol.style.width=400/gridSize+"px";
            gridCol.style.height=400/gridSize+"px";
            if(i==x && j==y)
            {
                gridCol.style.backgroundColor=oddColor;

            }
            gridCol.addEventListener('click',(e)=>handleClick(e,x,y));
            gridRow.appendChild(gridCol);





        }

        colorGrid.appendChild(gridRow);
    }
}

createGrid(gridSize);

