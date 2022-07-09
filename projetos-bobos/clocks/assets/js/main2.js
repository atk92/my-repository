const relogio = document.querySelector('.hora');
const data = new Date();


function addZeroAesquerda(num){
  return num >= 10 ? num : `0${num}`;
} 
function montadorHora() {
  const data = new Date();
  const diaM = addZeroAesquerda(data.getDate());
  const segs = addZeroAesquerda(data.getSeconds());
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const hora = addZeroAesquerda(data.getHours());
  const min = addZeroAesquerda(data.getMinutes());
  const diaSemana = data.getDay();
  
  function diaSemanaOrder(){
    
      const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sádabo'];
      
      return diasSemana[diaSemana];
    }
const nomeDiaSemana = diaSemanaOrder(diaSemana);

function getNomeMes(numeroMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março','Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return meses[numeroMes];
}        

const nomeMes = getNomeMes(mes);

diaSemanaOrder();

  return relogio.innerHTML = (`${nomeDiaSemana}, ${diaM} de ${nomeMes} de ${ano} <br> ${hora}:${min}:${segs}`)
}
setInterval(montadorHora, 1000);