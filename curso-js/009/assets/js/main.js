const relogio = document.querySelector('.container');
const boddy = document.querySelector('.boddy');

let segundos = 0;
let timer;

function iniciaTimer(){
  clearInterval(timer)
  timer = setInterval(()=>{segundos++; relogio.innerHTML = criaHoraDosSegundos(segundos)}, 1000)
}

function criaHoraDosSegundos(segundos){
  const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone:'GMT'})
}

document.addEventListener('click', (event)=>{
  const elemento = event.target;
  

  if(elemento.classList.contains('comecar')){    
    iniciaTimer();
  }

  if(elemento.classList.contains('pausar')){
    pause();
    function pause(){
      clearInterval(timer)}
      console.log('pausar')
      
  }

  if(elemento.classList.contains('zerar')){
    
    segundos = 0;
    clearInterval(timer)
    relogio.innerHTML = '00:00:00';
    
  }

})

document.addEventListener('click', (evento)=>{
  const elemento = evento.target;
  

  if(elemento.classList.contains('escuro')){
    console.log('escuro')
    boddy.style.background = '#000'
    relogio.style.color = '#fff'
    }
  if(elemento.classList.contains('claro')){
      console.log('claro')
      boddy.style.background = '#fff'
      relogio.style.color = '#000'
      }
})

