const bntO = document.querySelector('.opcoes');
const ctm = document.querySelector('.categorias-mobile');

bntO.addEventListener('click', () => {
  ctm.classList.toggle('ativo');
});

document.addEventListener('click', (event) => {
  const clicouNoBotao = bntO.contains(event.target);

  if (!clicouNoBotao) {
    ctm.classList.remove('ativo');
  }
});



const produtos = document.querySelector('.produtos');
const botaoD = document.querySelector('.setaD');

let posicao = 0;
const passo = 270;

botaoD.addEventListener('click', () => {
  posicao -= passo;
  produtos.style.transform = `translateX(${posicao}px)`;
});


