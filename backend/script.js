const menu = document.querySelector('.opcoes');

if (menu) {
  
}

const produtos = document.querySelector('.produtos');
const botaoD = document.querySelector('.setaD');

let posicao = 0;
const passo = 270;

botaoD.addEventListener('click', () => {
  posicao -= passo;
  produtos.style.transform = `translateX(${posicao}px)`;
});


