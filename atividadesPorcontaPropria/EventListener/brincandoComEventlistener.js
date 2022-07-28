
const clicks = addEventListener('click', function eventClickListener(eventoMouse){
  const elementoMouse = eventoMouse.target;
  return elementoMouse;
})


function keyBoardListener(evento){
  console.log(evento.code);
  if(evento.code === 'ArrowUp'){
    movingUp();
  }
}

function movingUp(){
  console.log('movendoParacima')
}

const keyboard = addEventListener('keydown', (evento)=>{keyBoardListener(evento);
  })

  