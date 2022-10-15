document.addEventListener('DOMContentLoaded', function(){
    
    let isGameActive = true; 

    let currentPlayer = "X" 
    let selection = []; 

    const board = document.querySelector("#board");
    const tiles = board.querySelectorAll("div");
    const status = document.querySelector("#status");

    let controls = document.querySelector(".controls");
    const newGame = controls.querySelector('.btn');

    newGame.addEventListener("click", startNewGame)

    tiles.forEach(function(tile, index){
        tile.classList.add('square'); // layout



        tile.addEventListener("mouseover", () => {
            tile.style.cursor = "pointer";
            tile.classList.add("hover");
        })

        tile.addEventListener("mouseout",()=>{ 
            tile.classList.remove("hover");
        });



        
        tile.addEventListener("click", function(e){ 

            if (isGameActive == true && tile.innerHTML==""){

                if (currentPlayer == "X"){
                    tile.classList.add("X")
                }
                else{
                    tile.classList.add("O");
                }

                tile.innerHTML = currentPlayer;
                

                selection[index] = currentPlayer;


                if (checkWinner(index,currentPlayer) == true){ 
                    isGameActive = false;
                    
                    status.classList.add("you-won");
                    status.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;

                };
                
                switch_player()
            
            }
            
        })
        
        
    })

    function switch_player(){ 
        if (currentPlayer=="X"){
            currentPlayer = "O";
        }
        else{
            currentPlayer = "X";
        }
    }


    function checkWinner(index,currentPlayer){
        if (index == 0){
            if((selection[1] == currentPlayer && selection[2] == currentPlayer) || 
            (selection[4]==currentPlayer && selection[8]==currentPlayer) || 
            (selection[3]==currentPlayer && selection[6] == currentPlayer)){
                return true;
            }
        }

        else if(index == 1){
            if((selection[0] == currentPlayer && selection[2]== currentPlayer) || 
            (selection[4]== currentPlayer && selection[7]== currentPlayer)){
                return true;
            }
        }

        else if(index == 2){
            if((selection[0] == currentPlayer && selection[1]== currentPlayer) || 
            (selection[4]== currentPlayer && selection[6]== currentPlayer) ||
            (selection[5] == currentPlayer && selection[8] == currentPlayer)){
                return true;
            }
        }

        else if(index == 3){
            if((selection[4] == currentPlayer && selection[5] == currentPlayer) ||
            (selection[0] == currentPlayer && selection[6] == currentPlayer)){
                return true;
            }
        }

        else if(index == 4){
            if((selection[3] == currentPlayer && selection[5] == currentPlayer) ||
            (selection[0] == currentPlayer && selection[8] == currentPlayer) ||
            (selection[2] == currentPlayer && selection[6] == currentPlayer)){
                return true;
            }
        }

        else if(index == 5){
            if((selection[3] == currentPlayer && selection[4] == currentPlayer) ||
            (selection[2] == currentPlayer && selection[8] == currentPlayer)){
                return true;
            }
        }

        else if(index == 6){
            if((selection[7] == currentPlayer && selection[8] == currentPlayer) ||
            (selection[2] == currentPlayer && selection[4] == currentPlayer) ||
            (selection[0] == currentPlayer && selection[3] == currentPlayer)){
                return true;
            }
        }

        else if(index == 7){
            if ((selection[6] == currentPlayer && selection[8] == currentPlayer) ||
            (selection[1] == currentPlayer && selection[4] == currentPlayer)){
                return true;
            }
        }

        else if(index == 8){
            if((selection[6] == currentPlayer && selection[7] == currentPlayer) ||
            (selection[0] == currentPlayer && selection[4] == currentPlayer) || 
            (selection[2] == currentPlayer && selection[5] == currentPlayer)){
                return true;
            }
        }

        return false; 
     };
    

    function startNewGame(){
        tiles.forEach(tile => {
            tile.classList.remove("X")
            tile.classList.remove("O")
            tile.innerHTML="";

        
        });

        selection = [] 

        status.classList.remove("you-won")
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."

        isGameActive = true; 
        player = "X";        
    }

     
        
    
});

