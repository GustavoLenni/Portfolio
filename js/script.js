let currentIndex = 0;
const images = document.querySelectorAll('.imagens img');
const totalImages = images.length;

// Função para mudar as imagens
function changeImage() {
  // Esconde a imagem atual
  images[currentIndex].style.display = 'none';

  // Atualiza o índice para a próxima imagem
  currentIndex = (currentIndex + 1) % totalImages;

  // Mostra a próxima imagem
  images[currentIndex].style.display = 'flex';

}

// Inicia a primeira imagem como visível
images[currentIndex].style.display = 'flex';

// Muda a imagem a cada 5 segundos
setInterval(changeImage, 5000);
