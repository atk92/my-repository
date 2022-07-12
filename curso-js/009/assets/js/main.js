const hora = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const fundo = document.querySelector('.sectionn');

let secunds = 0;
let minuts = 0;
let hours = 0;
let timer;


// ${minutos}<br>${segundos}

function iniciaTimer(){

  clearInterval(timer)
  timer = setInterval(()=>{secunds++;
    
    
    segundos.innerHTML = `${secunds}s<br>`;


    if(secunds >= 59){
      secunds = 0;
      minuts++
      minutos.innerHTML = `${minuts}m`;
    }
    if(minuts >= 59){
      minuts = 0;
      hours++
    }
    if(hours >= 23){
      hours = 0;
      minuts = 0;
      hora.innerHTML = `${hours}h`;
    }
  
  }, 1000)
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
      console.log('pausar')}

  if(elemento.classList.contains('zerar')){
    hours = 0;
    minuts = 0;
    secunds = 0;
    clearInterval(timer)
    segundos.innerHTML = `${secunds}s`;    
  }
})



// tema claro e escuro
document.addEventListener('click', (evento)=>{
  const elemento = evento.target;
  

  if(elemento.classList.contains('escuro')){
    console.log('escuro');
    fundo.style.background = '#000';
    hora.style.color = '#fff';
    }
  if(elemento.classList.contains('claro')){
      console.log('claro');
      fundo.style.background = '#fff';
      hora.style.color = '#000';
      }
})
