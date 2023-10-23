document.addEventListener('DOMContentLoaded',function(){
  const  Boardgame = document.getElementById("board")
  const  Boardsquares = Boardgame.getElementsByTagName('div');
  const gamestate = new Array(9)
  Move= Math.floor(Math.random()*(2-1+1))+1;
  for (const x of Boardsquares){
    x.classList.add('square','empty');
    x.addEventListener('click',function(){
        if (Move==2){
            x.textContent=('X');
            x.classList.add('X');
            gamestate[x] ='X';
            Move =1;
        }
        else{
            x.textContent=('O');
            x.classList.add('O');
            gamestate[x] ='O';
            Move =2;
        }


    

    });

  }


})