const relogio = document.querySelector('.hora');



function addZeroAesquerda(num){
  return num >= 10 ? num : `0${num}`;
} 
function montadorHora() {
  const data = new Date();
  const diaM = addZeroAesquerda(data.getDate());
  const segs = addZeroAesquerda(data.getSeconds());
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = addZeroAesquerda(data.getHours());
  const min = addZeroAesquerda(data.getMinutes());
  const diaSemana = data.getDay();
  let diaSemanaText;
  let mesText;
  
  function diaSemanaOrder(){
    switch (diaSemana){
      case 0:
      diaSemanaText = 'Domingo';
      return diaSemanaText;
      case 1:
      diaSemanaText = 'Segunda-Feira';
      return diaSemanaText;
      case 2:
      diaSemanaText = 'Terça-Feira';
      return diaSemanaText;
      case 3:
      diaSemanaText = 'Quarta-Feira';
      return diaSemanaText;
      case 4:
      diaSemanaText = 'Quinta-Feira';
      return diaSemanaText;
      case 5:
      diaSemanaText = 'Sexta-Feira';
      return diaSemanaText;
      case 6:
        diaSemanaText = 'Sábado';
        return diaSemanaText;}

  }
  function mesTxt(){
    switch (mes){
      case 1:
      mesText = 'Janeiro'
      return mesText;
      case 2:
      mesText = 'Fevereiro'
      return mesText;
      case 3:
      mesText = 'Março'
      return mesText;
      case 4:
      mesText = 'Abril'
      return mesText;
      case 5:
      mesText = 'Maio'
      return mesText;
      case 6:
      mesText = 'Junho'
      return mesText;
      case 7:
      mesText = 'Julho'
      return mesText;
      case 8:
      mesText = 'Agosto'
      return mesText;
      case 9:
      mesText = 'Setembro'
      return mesText;
      case 10:
      mesText = 'Outubro'
      return mesText;
      case 11:
      mesText = 'Novembro'
      return mesText;
      case 12:
      mesText = 'Dezembro'
      return mesText;
    }        
  }
  
mesTxt();
diaSemanaOrder();

  return relogio.innerHTML = (`${diaSemanaText}, ${diaM} de ${mesText} de ${ano} <br> ${hora}:${min}:${segs}`)
}
setInterval(montadorHora, 1000);