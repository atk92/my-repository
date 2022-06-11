function chuvaColorida(){
    let quantidade = 200;
    let bodyHtml = document.querySelector('body');
    let i = 0;
    while(i < quantidade){
        let derrubar = document.createElement('i');
        
        let tamanho = Math.random() * 5;

        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random()* -20;
        let duração = Math.random()* 5;


        derrubar.style.width = 0.2+tamanho+'px';
        derrubar.style.left = posX +'px';
        derrubar.style.animationDelay = delay+'s' 
        derrubar.style.animationDuration = 2+duração+'s'

        
        bodyHtml.appendChild(derrubar);
        i++
    }
}
chuvaColorida();