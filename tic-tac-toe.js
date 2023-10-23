document.addEventListener('DOMContentLoaded',function(){
  const  Boardgame = document.getElementById("board")
  const  Boardsquares = Boardgame.getElementsByTagName('div');
  for (const x of Boardsquares){
    x.classList.add('square');


  }


})