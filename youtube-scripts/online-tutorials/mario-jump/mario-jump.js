
const mario = document.getElementById('mario');
const cano = document.getElementById('cano');

const pulo = ()=>{
    mario.classList.add('pular');

    setTimeout(() => {
        mario.classList.remove('pular')
        
    }, 700);
}

function game(){
    
const loop = setInterval(() => {
    const posicaoDoCano = cano.offsetLeft;
   

    

    
    const posicaoDoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

        if(posicaoDoCano <= 120 && posicaoDoCano > 0 && posicaoDoMario < 115){
            cano.style.animation = 'none';
            cano.style.left = `${posicaoDoCano}px`

            

            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoDoMario}px`
        
            mario.src = './sprites/game-over.png'
            mario.style.width  = '75px'
            mario.style.marginLeft = '50px'
            clearInterval(loop);}
            
            
            
}, 10);
}
document.addEventListener('keydown', pulo)
document.addEventListener('keydown', game)
document.addEventListener('touchstart', game)
document.addEventListener('touchstart', pulo)

