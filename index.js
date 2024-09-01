let gridItems=document.querySelectorAll(".grid-item")
let grid=document.querySelector(".grid-container")
let topText=document.querySelector('#top-text')
let startGameBtn=document.querySelector("#start-btn")
let score=0


function showAlert(){
    alert("Click on Start Game")
}
grid.addEventListener('click', showAlert)


function startGame(){
  
    grid.removeEventListener('click',showAlert)

    startGameBtn.innerHTML = '<a href="javascript:location.reload()">New Game</a>'

    topText.innerText="Score: "+score

    let mine=Math.floor(Math.random()*25)

    gridItems.forEach((item,index)=>{
        item.addEventListener('click',function(){
            if(index==mine)
                {
                    item.style.backgroundImage='url("images/mine.webp")';
                    item.style.backgroundSize='cover';
                    gameOver()
                }
            else
            {
                item.style.backgroundImage='url("images/gem.webp")';
                item.style.backgroundSize='cover';
                score+=10
                topText.innerText="Score: "+score
                if(score===240)
                {
                    youHaveWon()
                }
            }   
        })
    })

}

function gameOver(){
    
    topText.style.fontSize='36px'
    topText.innerText="GAME OVER!!! SCORE: "+score
    
    gridItems.forEach(item =>{
        item.classList.add('disabled');
    }) 
}

function youHaveWon()
{
    topText.style.fontSize='38px'
    topText.innerText="WOHOO!!! YOU WON!!!"
    
    gridItems[mine].style.backgroundImage='url("images/mine.webp")';
    gridItems[mine].style.backgroundSize='cover';
    gridItems[mine].classList.add('disabled')
}
