function ValidaCpf(cpfEnv){
    Object.defineProperty(this, 'cpfLimpo', {
      get: function(){
        return cpfEnv.replace(/\D+/g,'');
    }
  
  })
}

ValidaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') return false;

  if(this.cpfLimpo.length !== 11) return false;

  if(this.isSequencia()){
    cpfInvalido();
    return false;
  }

  const cpfParcial = this.cpfLimpo.slice(0, -2);

  const digito1 = this.criaDigito(cpfParcial);

  const digito2 = this.criaDigito(cpfParcial + digito1);

  const cpfNovo = cpfParcial + digito1 + digito2

  return cpfNovo === this.cpfLimpo;
  
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);
// Aqui eu já tenho o cpfParcial sendo um Array
  let regressivo = cpfArray.length + 1;

  const total = cpfArray.reduce((ac, val)=>{
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequencia = function(){
  return this.cpfLimpo === this.cpfLimpo[0].repeat(this.cpfLimpo.length);

  
}

function recebeCpf(){
const inputCpf = document.querySelector('.envCpf');
const valor = inputCpf.value
const cpf = new ValidaCpf(valor);
if(cpf.valida() === true ){
  cpfValido();
}
else{
  cpfInvalido();
  }
}

function cpfInvalido(){
  let elemento = document.querySelector('.resultado');
  let elemento1 = document.querySelector('.envCpf')
  elemento1.classList.add('falso')
  elemento.innerHTML = `Falso`
}

function cpfValido(){
  let elemento = document.querySelector('.resultado');
  let elemento1 = document.querySelector('.envCpf')
  elemento1.classList.add('verdadeiro')
  elemento.innerHTML = `Verdadeiro`  
}

