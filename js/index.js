const h1 = document.querySelector('.container h1');
const data = new Date();
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      DiaSemanaTexto = 'Domingo';
      return DiaSemanaTexto;
    case 1:
      DiaSemanaTexto = 'Segunda-feira';
      return DiaSemanaTexto;
    case 2:
      DiaSemanaTexto = 'Terça-feira';
      return DiaSemanaTexto;
    case 3:
      DiaSemanaTexto = 'Quarta-feira';
      return DiaSemanaTexto;
    case 4:
      DiaSemanaTexto = 'Quinta-feira';
      return DiaSemanaTexto;
    case 5:
      DiaSemanaTexto = 'Sexta-feira';
      return DiaSemanaTexto;
    case 6:
      DiaSemanaTexto = 'Sábado-feira';
      return DiaSemanaTexto;
  }
}
function getNomeMes(numeroMes) {
  let nomeMes;

  switch (numeroMes) {
    case 0:
      nomeMes = 'Janeiro';
      return nomeMes;
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes;
    case 2:
      nomeMes = 'Março';
      return nomeMes;
    case 3:
      nomeMes = 'Abril';
      return nomeMes;
    case 4:
      nomeMes = 'Maio';
      return nomeMes;
    case 5:
      nomeMes = 'Junho';
      return nomeMes;
    case 6:
      nomeMes = 'Julho';
      return nomeMes;
    case 7:
      nomeMes = 'Agosto';
      return nomeMes;
    case 8:
      nomeMes = 'Setembro';
      return nomeMes;
    case 9:
      nomeMes = 'Outubro';
      return nomeMes;
    case 10:
      nomeMes = 'Novembro';
      return nomeMes;
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes;
  }
}
function zeroAEsquerda (num){
 return num >= 10 ? num : `0${num}`
}
function criaData(data){
const diaSemana = data.getDay();
const numeroMes = data.getMonth();

const nomeDia = getDiaSemanaTexto(diaSemana);
const nomeMes = getNomeMes(numeroMes);

console.log(nomeDia, nomeMes);
return (
  `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
  ` de ${data.getFullYear()} ` + 
  `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = criaData(data);